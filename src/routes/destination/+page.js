export async function load({ fetch }) {
	const res = await fetch('destination');
	const destination = await res.json();

	return {
		destination: destination
	};
}
