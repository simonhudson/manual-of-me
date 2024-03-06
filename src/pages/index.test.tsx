import Home, { getServerSideProps } from '@/src/pages/index';
import { screen, render } from '@testing-library/react';
import { MockItem } from '@/test/mock-data/item';
import { MockCategory } from '@/test/mock-data/category';
import { getItems, getCategories } from '@/src/helpers/api';
import { cloneDeep } from 'lodash';

jest.mock('@/src/helpers/api');

jest.mock('@/src/helpers/api', () => {
	return {
		__esModule: true,
		getItems: jest.fn(() =>
			Promise.resolve({
				data: [MockItem],
			})
		) as jest.Mock,
		getCategories: jest.fn(() =>
			Promise.resolve({
				data: [MockCategory],
			})
		) as jest.Mock,
	};
});

const serverSideProps = {
	categoriesData: [MockCategory],
	itemsData: [MockItem],
};

describe('Home', () => {
	describe('getServerSideProps', () => {
		afterEach(() => {
			jest.clearAllMocks();
		});

		it('should make expected API calls and return data', async () => {
			// When
			const actual = await getServerSideProps();

			// Then
			expect(getItems).toHaveBeenCalledTimes(1);
			expect(getCategories).toHaveBeenCalledTimes(1);
			expect(actual.props).toEqual(serverSideProps);
		});
	});
	it(`should render as expected`, () => {
		// When
		render(<Home {...serverSideProps} />);

		// Then
		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('To-do');
		expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Complete');
	});

	it(`should render with incomplete items`, () => {
		// When
		render(<Home {...serverSideProps} />);

		// Then
		expect(screen.getAllByRole('list').length).toEqual(1);
	});
	it('should render with complete items', () => {
		// Given
		const props = cloneDeep(serverSideProps);
		props.itemsData[0].is_complete = true;

		// When
		render(<Home {...props} />);

		// Then
		expect(screen.getAllByRole('list').length).toEqual(1);
	});
	it('should render with incomplete and complete items', () => {
		// Given
		let props = cloneDeep(serverSideProps);
		const newItem = cloneDeep(MockItem);
		newItem.is_complete = true;
		props.itemsData = [...props.itemsData, newItem];

		// When
		render(<Home {...props} />);

		// Then
		expect(screen.getAllByRole('list').length).toEqual(2);
	});
});
