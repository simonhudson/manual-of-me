import { AddItem, AddItemProps } from './index';
import { screen, render, fireEvent } from '@testing-library/react';

describe('AddItem', () => {
	const props: AddItemProps = {
		categoriesData: [
			{ _id: 'cat-1', value: 'Cat 1' },
			{ _id: 'cat-2', value: 'Cat 2' },
		],
		handleCategoryChange: jest.fn(),
		handleNameChange: jest.fn(),
		nameFieldValue: 'field-value',
		onSubmit: jest.fn().mockImplementation((e) => e.preventDefault()),
	};

	it('should render as expected', () => {
		// When
		render(<AddItem {...props} />);

		// Then
		expect(screen.getByRole('textbox')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('(e.g. Pick up milk)')).toBeInTheDocument();
		expect(screen.getByLabelText('Name')).toBeInTheDocument();
		expect(screen.getByText('What do you need to remember?')).toBeInTheDocument();
		const checkboxes = screen.getAllByRole('checkbox');
		expect(checkboxes.length).toEqual(2);
		expect(checkboxes[0].getAttribute('id')).toEqual('checkbox-cat-1');
		expect(checkboxes[0].getAttribute('name')).toEqual('checkbox-cat-1');
		expect(checkboxes[0].getAttribute('value')).toEqual('cat-1');
		expect(checkboxes[1].getAttribute('id')).toEqual('checkbox-cat-2');
		expect(checkboxes[1].getAttribute('name')).toEqual('checkbox-cat-2');
		expect(checkboxes[1].getAttribute('value')).toEqual('cat-2');
	});

	describe('should handle change event', () => {
		it('for text input field', () => {
			// Given
			render(<AddItem {...props} />);

			// When
			fireEvent.change(screen.getByRole('textbox'), { target: { value: 'new value ' } });

			// Then
			expect(props.handleNameChange).toHaveBeenCalledTimes(1);
		});
		it('for checkbox fields', () => {
			// Given
			render(<AddItem {...props} />);

			// When
			fireEvent.click(screen.getByLabelText('Cat 1'));
			fireEvent.click(screen.getByLabelText('Cat 2'));

			// Then
			expect(props.handleCategoryChange).toHaveBeenCalledTimes(2);
		});
	});
	it('should submit form', () => {
		// Given
		render(<AddItem {...props} />);

		// When
		fireEvent.click(screen.getByRole('button'));

		// Then
		expect(props.onSubmit).toHaveBeenCalledTimes(1);
	});
});
