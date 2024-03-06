import { Icon, IconProps } from './index';
import { render } from '@/test/utils';
import { screen } from '@testing-library/react';

describe('Icon', () => {
	it(`should render as expected`, () => {
		// Given
		const props: IconProps = {
			name: 'foo',
			className: 'bar',
		};
		// When
		initialise(props);

		// Then
		const icon = screen.getByRole('img', { hidden: true });
		expect(icon).toBeInTheDocument();
		expect(icon).toHaveClass('fa-solid fa-foo bar');
		expect(icon).toHaveAttribute('aria-hidden', 'true');
	});

	const initialise = (props: IconProps) => render(<Icon name={props.name} className={props.className} />);
});
