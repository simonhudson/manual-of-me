import mongoClient from '@/db/mongoClient';
import type { NextApiRequest, NextApiResponse } from 'next';
import { sendResponsePayload } from '@/src/helpers/api';
const COLLECTION_NAME = 'categories';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const client = await mongoClient;
	const db = client.db(process.env.DB_NAME);

	const METHOD = req.method?.toLowerCase();
	switch (METHOD) {
		case 'get':
			const getResponse = await db.collection(COLLECTION_NAME).find({}).sort({}).toArray();
			sendResponsePayload(getResponse, res);
			break;
		case 'post':
			const body = JSON.parse(req.body);
			const postResponse = await db.collection(COLLECTION_NAME).insertOne(body);
			sendResponsePayload(postResponse, res);
			break;
	}
};

export default handler;
