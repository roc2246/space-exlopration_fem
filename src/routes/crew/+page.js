export async function load({ fetch }) {
	const res = await fetch('crew');
	const crew = await res.json();

	return {
		crew: crew
	};
}
