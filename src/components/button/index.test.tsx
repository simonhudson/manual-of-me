import { Button, ButtonProps } from './index';
import { screen, render, fireEvent } from '@testing-library/react';
import { getTagName } from '@/test/utils';

const baseProps: ButtonProps = {
	label: 'My Button',
};

describe('Button', () => {
	it('should render as expected', () => {
		// When
		initialise();

		// Then
		expect(screen.getByRole('button')).toBeInTheDocument();
		expect(screen.getAllByRole('button').length).toEqual(1);
		expect(screen.getByText('My Button')).toBeInTheDocument();
		expect(getTagName(screen.getByText('My Button'))).toEqual('button');
	});

	it('should fire onClick event', () => {
		// Given
		const props = { ...baseProps };
		props.onClick = jest.fn();
		initialise(props);

		// When
		fireEvent.click(screen.getByText('My Button'));

		// Then
		expect(props.onClick).toHaveBeenCalledTimes(1);
	});

	describe('Link variant', () => {
		it('should render with expected href attr', () => {
			// Given
			const props = { ...baseProps };
			props.href = 'http://foo.com';

			// When
			initialise(props);

			// Then
			expect(getTagName(screen.getByText('My Button'))).toEqual('a');
			expect(screen.getByText('My Button')).toHaveAttribute('href', 'http://foo.com');
			expect(screen.getByText('My Button')).not.toHaveAttribute('target');
		});
		it('should open in new tab/window when expected', () => {
			// Given
			const props = { ...baseProps };
			props.href = 'http://foo.com';
			props.opensNewTab = true;

			// When
			initialise(props);

			// Then
			expect(getTagName(screen.getByText('My Button'))).toEqual('a');
			expect(screen.getByText('My Button')).toHaveAttribute('href', 'http://foo.com');
			expect(screen.getByText('My Button')).toHaveAttribute('target', '_blank');
		});
	});
});

const initialise = (props = baseProps) => render(<Button {...props} />);
