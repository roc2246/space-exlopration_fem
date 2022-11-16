import { crew } from '$db/collections';

export const GET = async () => {
	const data = await crew.find().toArray();
	return new Response(JSON.stringify(data), { status: 200 });
};

