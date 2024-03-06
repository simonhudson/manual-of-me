import { Input, InputProps } from './index';
import { screen, render, fireEvent } from '@testing-library/react';

describe('Checkbox', () => {
	const props: InputProps = {
		id: 'id-1',
		label: 'Some label',
		onChange: jest.fn(),
		placeholder: 'Placeholder text',
		value: 'value-1',
	};

	it('should render as expected', () => {
		// When
		render(<Input {...props} />);

		// Then
		const input = screen.getByRole('textbox');
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('id', 'input-id-1');
		expect(input).toHaveAttribute('name', 'input-id-1');
		expect(input).toHaveAttribute('type', 'text');
		expect(screen.getByDisplayValue('value-1')).toBeInTheDocument();
		expect(screen.getByText('Some label')).toBeInTheDocument();
	});

	it('should handle onChange event', () => {
		// Given
		render(<Input {...props} />);

		// When
		fireEvent.change(screen.getByRole('textbox'), { target: { value: 'new value' } });

		// Then
		expect(props.onChange).toHaveBeenCalledTimes(1);
	});

	it('should render specified input type', () => {
		// When
		const newProps = { ...props };
		newProps.type = 'number';
		render(<Input {...newProps} />);

		// Then
		expect(screen.getByLabelText('Some label')).toHaveAttribute('type', 'number');
	});
});
