import { destinations } from '$db/collections';

export const GET = async () => {
	const data = await destinations.find().toArray();
	console.log(data);
	return new Response(JSON.stringify( data ), { status: 200 });
};
