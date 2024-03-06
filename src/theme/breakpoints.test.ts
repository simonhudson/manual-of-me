import { Breakpoints } from './breakpoints';

describe('theme/breakpoints', () => {
	it('should return expected values', () => {
		expect(Breakpoints.phonePortrait).toEqual(420);
		expect(Breakpoints.phoneLandscape).toEqual(650);
		expect(Breakpoints.tabletPortrait).toEqual(768);
		expect(Breakpoints.tabletLandscape).toEqual(1024);
		expect(Breakpoints.desktop).toEqual(1200);
	});
});
