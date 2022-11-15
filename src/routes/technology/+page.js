export async function load({ fetch }) {
	const res = await fetch('technology');
	const technology = await res.json();

	return {
		technology: technology
	};
}
