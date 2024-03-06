import { httpStatusCodes } from './httpStatusCodes';
describe('httpStatusCodes', () => {
	it('should return expected values', () => {
		expect(httpStatusCodes.OK).toEqual(200);
		expect(httpStatusCodes.NOT_FOUND).toEqual(404);
		expect(httpStatusCodes.SERVER_ERROR).toEqual(500);
	});
});
