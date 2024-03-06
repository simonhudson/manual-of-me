import { zIndex } from './z-index';

describe('zIndex', () => {
	it('should return expected value when key exists', () => {
		expect(zIndex('access-nav')).toEqual(1);
		expect(zIndex('site-header')).toEqual(2);
	});
	it('should return 0 when key does not exist', () => {
		expect(zIndex('foo')).toEqual(0);
	});
});
