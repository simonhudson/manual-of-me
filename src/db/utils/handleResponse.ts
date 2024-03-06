import type { ApiErrorResponse, ApiSuccessResponse } from '@/src/db/types/api';
import type { DeleteResult, InsertOneResult, UpdateResult, WithId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

export const handleResponse = (
	req: NextApiRequest,
	res: NextApiResponse,
	response:
		| WithId<any>[]
		| InsertOneResult<Document>
		| UpdateResult<Document>
		| DeleteResult
		| ApiErrorResponse
		| unknown
): void => {
	const commitSha =
		process.env.COMMIT_SHA_SHORT ??
		require('child_process').execSync('git rev-parse --short HEAD').toString().trim();

	const responsePayload: ApiSuccessResponse = {
		status: res.statusCode,
		metadata: {
			endpoint: req.url,
			method: req.method,
			commitSha,
		},
		data: [],
	};

	if (response && typeof response === 'object' && 'error' in response && response.error) {
		responsePayload.error = response.error;
	} else {
		responsePayload.data = response as any[];
	}

	if (Array.isArray(response)) responsePayload.metadata.count = response.length;
	res.status(res.statusCode);
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.json(responsePayload);
};
