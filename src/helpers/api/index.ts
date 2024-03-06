import type { NextApiResponse } from 'next';
import { httpStatusCodes } from '@/src/constants/httpStatusCodes';
import { DeleteResult, InsertOneResult, UpdateResult, WithId } from 'mongodb';
import type { ResponsePayload } from './types.d';

const API_PATH = `/api/`;

const doGet = async (path: string) => {
	const API_URL = `${process.env.API_DOMAIN}${API_PATH}`;
	const response = await fetch(`${API_URL}${path}`, { method: 'get' });
	const data = await response.json();
	return data;
};

// const doPut = async (path: string) => {
// 	const API_URL = `${process.env.API_DOMAIN}${API_PATH}`;
// 	const response = await fetch(`${API_URL}${path}`, { method: 'put' });
// 	const data = await response.json();
// 	return data;
// };

export const getPeople = async () => doGet('people');
export const getPerson = async (slug: string) => await doGet(`people/${slug}`);
