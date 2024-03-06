import mongoClient from '@/src/db/mongoClient';
import type { NextApiRequest, NextApiResponse } from 'next';
import { handleResponse } from '@/src/db/utils/handleResponse';
// import { ObjectId } from 'mongodb';
import { get } from '@/src/db/methods/get';
import { slugify } from '@/src/db/utils/slugify';

const COLLECTION_NAME = 'people';

const transform = (data: any): any => {
	data.forEach((item) => {
		item.slug = slugify(`${item.firstName} ${item.lastName}`);
	});
	return data;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const client = await mongoClient;
	const db = client.db(process.env.DB_NAME);

	const doGet = async () => {
		const response = await get({
			collectionName: COLLECTION_NAME,
			db,
			sortBy: 'lastName',
		});

		// const response = await db
		// 	.collection(COLLECTION_NAME)
		// 	.aggregate([
		// 		{
		// 			$lookup: {
		// 				from: 'categories', // Collection we want to query
		// 				localField: 'categories', // Local field we want to match against
		// 				foreignField: 'category_id', // Foreign field we want to query
		// 				as: 'categoryValues', // Key name we want to create (if this already exists, it will be over-written)
		// 			},
		// 		},

		// 		// Now that we have our new 'categoryValues' key (which is an array of objects pulled from the collection)
		// 		//	we use $addFields with $map to strip this down to a simple array of strings
		// 		{
		// 			$addFields: {
		// 				categoryValues: {
		// 					$map: {
		// 						input: '$categoryValues',
		// 						in: '$$this.value',
		// 					},
		// 				},
		// 			},
		// 		},
		// 	])
		// 	.toArray();
		handleResponse(req, res, transform(response));
	};

	// const doPost = async () => {
	// 	const body = JSON.parse(req.body);
	// 	const response = await db.collection(COLLECTION_NAME).insertOne(body);
	// 	sendResponsePayload(response, res);
	// };

	// const doPut = async () => {
	// 	const body = JSON.parse(req.body);
	// 	const query = { _id: new ObjectId(body._id) };
	// 	const newValues = {
	// 		$set: {
	// 			name: body.name,
	// 			is_complete: body.is_complete,
	// 			categories: body.categories,
	// 		},
	// 	};
	// 	const response = await db.collection(COLLECTION_NAME).updateOne(query, newValues);
	// 	sendResponsePayload(response, res);
	// };

	// const doDelete = async () => {
	// 	const body = JSON.parse(req.body);
	// 	const query = { _id: new ObjectId(body._id) };
	// 	const response = await db.collection(COLLECTION_NAME).deleteOne(query);
	// 	sendResponsePayload(response, res);
	// };

	const METHOD = req.method?.toLowerCase();
	switch (METHOD) {
		case 'get':
			await doGet();
			break;
		// case 'post':
		// 	await doPost();
		// 	break;
		// case 'put':
		// 	await doPut();
		// 	break;
		// case 'delete':
		// 	await doDelete();
		// 	break;
	}
};

export default handler;
