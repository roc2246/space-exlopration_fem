import { destinations } from '$db/collections';

export const GET = async () => {
	const data = await destinations.find().toArray();
	return new Response(JSON.stringify( data ), { status: 200 });
};
