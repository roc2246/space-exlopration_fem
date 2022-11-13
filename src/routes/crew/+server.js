import { crew } from '$db/collections';

export const GET = async () => {
	const data = await crew.find().toArray();
	console.log(data);
	return new Response(JSON.stringify( data ), { status: 200 });
};
