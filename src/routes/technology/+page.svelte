<script>
	import Nav from '$lib/Nav.svelte';

	export let data;
	const technology = data.technology;
	let no = 0;
</script>

<section id="technology-container">
	<Nav />
	<header class="heading">
		<h2 class="heading__title">
			<span class="heading__title--no">03</span>
			<span class="heading__title--name">SPACE LAUNCH 101</span>
		</h2>
	</header>
	<main class="technology">
		<section class="technology__select">
			{#each technology as item, i}
				<h1 on:keydown on:click={() => (no = i)} class="technology__select--no">
					{i}
				</h1>
			{/each}
		</section>
		<section class="technology__heading">
			<h3 class="technology__heading--secondary">THE TECHNOLOGY...</h3>
			<h1 class="technology__heading--primary">{technology[no].name.toUpperCase()}</h1>
		</section>
		<p class="technology__description">
			{technology[no].description}
		</p>
		<section class="technology__image">
			<img
				class="technology__image--desktop"
				src={technology[no].images.landscape}
				alt={technology[no].name}
			/>
			<img
				class="technology__image--mobile"
				src={technology[no].images.portrait}
				alt={technology[no].name}
			/>
		</section>
	</main>
</section>
