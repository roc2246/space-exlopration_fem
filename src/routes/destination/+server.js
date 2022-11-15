import { destination } from '$db/collections';

export const GET = async () => {
	const data = await destination.find().toArray();
	console.log(data);
	return new Response(JSON.stringify( data ), { status: 200 });
};
