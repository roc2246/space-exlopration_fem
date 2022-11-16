import { technology } from '$db/collections';

export const GET = async () => {
	const data = await technology.find().toArray();
	return new Response(JSON.stringify( data ), { status: 200 });
};
