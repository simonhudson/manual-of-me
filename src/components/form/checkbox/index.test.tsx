import { Checkbox, CheckboxProps } from './index';
import { screen, render, fireEvent } from '@testing-library/react';

describe('Checkbox', () => {
	const props: CheckboxProps = {
		id: 'id-1',
		label: 'Some label',
		onChange: jest.fn(),
		value: 'value-1',
	};

	it('should render as expected', () => {
		// When
		render(<Checkbox {...props} />);

		// Then
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeInTheDocument();
		expect(checkbox).toHaveAttribute('id', 'checkbox-id-1');
		expect(checkbox).toHaveAttribute('name', 'checkbox-id-1');
		expect(checkbox).toHaveAttribute('type', 'checkbox');
		expect(screen.getByDisplayValue('value-1')).toBeInTheDocument();
		expect(screen.getByLabelText('Some label')).toBeInTheDocument();
	});

	it('should handle onChange event', () => {
		// Given
		render(<Checkbox {...props} />);

		// When
		fireEvent.click(screen.getByRole('checkbox'));

		// Then
		expect(props.onChange).toHaveBeenCalledTimes(1);
	});
});
