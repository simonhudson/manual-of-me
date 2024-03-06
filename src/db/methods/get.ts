import { createError } from '@/src/db/utils/createError';
import type { ApiErrorResponse, ApiRequestParams } from '@/src/db/types/api';
import type { Db, WithId } from 'mongodb';

export interface ApiGetParams extends ApiRequestParams {
	db: Db;
}

export const get = async ({
	collectionName,
	db,
	query,
	sortBy,
	sortDirection,
}: ApiGetParams): Promise<WithId<any>[]> => {
	let queryObj = query ?? {};
	let sortQuery = {};
	if (sortBy) sortQuery = { [sortBy]: sortDirection === 'asc' ? 1 : -1 };

	try {
		const response = await db.collection(collectionName).find(queryObj).sort(sortQuery).toArray();
		return response;
	} catch (error: unknown) {
		return createError({ data: error });
	}
};
