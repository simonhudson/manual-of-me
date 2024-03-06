import mongoClient from '@/src/db/mongoClient';
import type { NextApiRequest, NextApiResponse } from 'next';
import { COLLECTION_NAME } from '@/src/pages/api/people/constants';
import { handleResponse } from '@/src/db/utils/handleResponse';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const client = await mongoClient;
	const db = client.db(process.env.DB_NAME);

	const METHOD = req.method?.toLowerCase();

	let response;

	switch (METHOD) {
		case 'get':
			let queryObj = {};
			const { slug } = req.query;
			if (slug && typeof slug === 'string') {
				const slugSplit = slug.split('-');
				const firstName = slugSplit[0];
				const lastName = slugSplit[1];
				if (firstName && lastName) {
					queryObj = {
						firstName: { $regex: new RegExp(firstName, 'i') },
						lastName: { $regex: new RegExp(lastName, 'i') },
					};
				}
			}
			response = await db.collection(COLLECTION_NAME).find(queryObj).toArray();
			break;
	}
	handleResponse(req, res, response);
};

export default handler;
