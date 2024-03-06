import { spacingPx, spacingRem } from './spacing';

describe('theme/spacing', () => {
	it('should return expected px values', () => {
		expect(spacingPx).toEqual({
			default: 16,
			xsm: 4,
			sm: 8,
			md: 32,
			lg: 64,
			xlg: 96,
			xxlg: 128,
			xxxlg: 192,
		});
	});
	it('should return expected rem values', () => {
		expect(spacingRem).toEqual({
			default: '1rem',
			xsm: '0.25rem',
			sm: '0.5rem',
			md: '2rem',
			lg: '4rem',
			xlg: '6rem',
			xxlg: '8rem',
			xxxlg: '12rem',
		});
	});
});
