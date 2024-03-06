import { font } from './font';

describe('theme/font', () => {
	it('should return expected values', () => {
		expect(font).toEqual({
			size: 16,
			heading: `Poppins, arial, helvetica, sans-serif`,
			sansSerif: `'Open Sans', arial, helvetica, sans-serif`,
			serif: `'Lora', 'times new roman', serif`,
			semiBold: 'opensans_semibold',
			bold: 'opensans_bold',
			code: `'Courier New', Courier, monospace`,
			weight: 400,
			lineHeight: 1.8,
		});
	});
});
