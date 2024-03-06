import { CheckboxGroup } from '@/src/components/form/checkbox/group';
import { FieldRow, Button } from '@/src/components/form/form.styles';
import { Form } from '@/src/components/form/form.styles';
import { Input } from '@/src/components/form/input';
import type { Category } from '@/src/types/category';
import type { FormEventHandler } from 'react';

export type AddItemProps = {
	categoriesData: Category[];
	handleCategoryChange: () => void;
	handleNameChange: () => void;
	nameFieldValue: string;
	onSubmit: FormEventHandler;
};

export const AddItem = ({
	categoriesData,
	handleCategoryChange,
	handleNameChange,
	nameFieldValue,
	onSubmit,
}: AddItemProps) => {
	return (
		<>
			<Form onSubmit={onSubmit}>
				<FieldRow>
					<Input
						errorText="Please enter a name for your item"
						description="What do you need to remember?"
						id="name"
						label="Name"
						onChange={handleNameChange}
						placeholder="(e.g. Pick up milk)"
						required={true}
						value={nameFieldValue}
					/>
				</FieldRow>
				<CheckboxGroup
					items={categoriesData}
					handleCategoryChange={handleCategoryChange}
					legend="Choose categories"
					required={true}
				/>
				<Button>Add item</Button>
			</Form>
		</>
	);
};
