import React, { useState } from 'react';
import { H1, H2 } from '@/src/theme/typography';
import type { Item } from '@/src/types/item';
import type { Category } from '@/src/types/category';
import { httpStatusCodes } from '@/src/constants/httpStatusCodes';
import { getItems, getCategories } from '@/src/helpers/api';
import { ItemsList, ItemsItem, ItemInfo, ItemName, ItemCategories, Actions } from '@/src/theme/styles';
import { Button } from '@/src/components/form/form.styles';
import { AddItem } from '@/src/components/add-item';
import { Modal } from '@/src/components/modal';
import { sanitizeString } from '@/src/helpers/sanitizeString';

export const getServerSideProps = async () => {
	try {
		const items = await getItems();
		const categories = await getCategories();
		return {
			props: {
				itemsData: items.data,
				categoriesData: categories.data,
			},
		};
	} catch (error) {
		return {
			props: {},
		};
	}
};

type FormFieldValues = {
	name: string;
	categories: string[];
	is_complete: boolean;
};

const defaultFormFieldValues: FormFieldValues = {
	name: '',
	categories: [],
	is_complete: false,
};

const Home = ({ itemsData, categoriesData }: { itemsData: Item[]; categoriesData: Category[] }) => {
	const [statusMessage, setStatusMessage] = useState<string>('');
	const [items, setItems] = useState<Item[]>(itemsData);
	const [formFieldValues, setFormFieldValues] = useState<FormFieldValues>(defaultFormFieldValues);
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

	const clearFormFieldValues = () => {
		setFormFieldValues(defaultFormFieldValues);
	};

	const refreshData = async (response: Response) => {
		if (response.status === httpStatusCodes.OK) {
			const data = await getItems();
			setItems(data.data);
			clearFormFieldValues();
		} else {
			setStatusMessage('Sorry, there was an error adding your item.');
		}
	};

	const handleCategoryChange = (e: { target: { checked: boolean; value: string } }) => {
		if (e.target.checked) {
			const updatedCategories = formFieldValues.categories;
			updatedCategories.push(e.target.value);
			setFormFieldValues({
				...formFieldValues,
				categories: updatedCategories,
			});
		} else {
			const updatedCategories = formFieldValues.categories.filter((item) => item !== e.target.value);
			setFormFieldValues({
				...formFieldValues,
				categories: updatedCategories,
			});
		}
	};

	const handleNameChange = (e: { target: { value: string } }) => {
		setFormFieldValues({ ...formFieldValues, name: e.target.value });
	};

	const submitForm = async (e: { preventDefault: Function }) => {
		e.preventDefault();
		const postResponse = await fetch('/api/to-do/items', {
			method: 'post',
			body: JSON.stringify({ ...formFieldValues, name: sanitizeString(formFieldValues.name) }),
		});
		setModalIsOpen(false);
		refreshData(postResponse);
	};

	const updateItemState = async (item: Item) => {
		const putResponse = await fetch('/api/to-do/items', {
			method: 'put',
			body: JSON.stringify({
				...item,
				is_complete: !item.is_complete,
			}),
		});
		refreshData(putResponse);
	};

	const deleteItem = async (item: Item) => {
		const deleteResponse = await fetch('/api/to-do/items', {
			method: 'delete',
			body: JSON.stringify(item),
		});
		refreshData(deleteResponse);
	};

	const renderList = (items: Item[]) =>
		items.length ? (
			<ItemsList>
				{items.map((item) => {
					return (
						<ItemsItem id={`item-${item._id}`} key={`item-${item._id}`}>
							<ItemInfo>
								<ItemName>{item.name}</ItemName>
								{item.categoryValues && (
									<ItemCategories>{item.categoryValues.join(', ')}</ItemCategories>
								)}
							</ItemInfo>
							<Actions>
								<Button onClick={() => updateItemState(item)}>
									{item.is_complete ? 'Add to To-do' : 'Complete'}
								</Button>
								<Button onClick={() => deleteItem(item)}>Delete</Button>
							</Actions>
						</ItemsItem>
					);
				})}
			</ItemsList>
		) : null;

	const renderIncompleteList = () => renderList(items.filter((item) => !item.is_complete));
	const renderCompleteList = () => renderList(items.filter((item) => item.is_complete));

	return itemsData ? (
		<>
			<H1>To-do</H1>
			{renderIncompleteList()}
			<H2>Complete</H2>
			{renderCompleteList()}
			<Button onClick={() => setModalIsOpen(true)}>Add new item</Button>
			{modalIsOpen && (
				<Modal onClose={() => setModalIsOpen(false)}>
					<AddItem
						categoriesData={categoriesData}
						handleCategoryChange={handleCategoryChange}
						handleNameChange={handleNameChange}
						nameFieldValue={formFieldValues.name}
						onSubmit={submitForm}
					/>
				</Modal>
			)}
		</>
	) : null;
};

export default Home;
