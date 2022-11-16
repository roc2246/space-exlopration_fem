<script>
	import Nav from '$lib/Nav.svelte';

	export let data;
	const crew = data.crew;
	let no = 0;
</script>

<section id="crew-container">
	<Nav />
	<header class="heading">
		<h2 class="heading__title">
			<span class="heading__title--no">02</span>
			<span class="heading__title--name">MEET YOUR CREW</span>
		</h2>
	</header>
	<main class="crew">
		<section class="crew__heading">
			<h3 class="crew__heading--secondary">{crew[no].role.toUpperCase()}</h3>
			<h1 class="crew__heading--primary">{crew[no].name.toUpperCase()}</h1>
		</section>
		<p class="crew__description">
			{crew[no].bio}
		</p>

		<section class="crew__select">
			{#each crew as item, i}
				<h1 on:keydown on:click={() => (no = i)} class="crew__select--no">.</h1>
			{/each}
		</section>

		<section class="crew__image">
			<img src={crew[no].images.png} alt={crew[no].name} />
		</section>
	</main>
</section>
