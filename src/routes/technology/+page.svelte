<script>
	import TopRow from '../../lib/TopRow.svelte';

	export let data;
	const technology = data.technology;
	let no = 0;
</script>

<section class="page-container"  id="technology-container">
	<TopRow />
	<main class="technology main">
		<h2 class="technology__title">
			<span class="technology__title--no">03</span>
			<span class="technology__title--name">SPACE LAUNCH 101</span>
		</h2>
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

<style lang="scss">
	.technology__image--desktop, .technology__image--mobile{
		max-width: 100%;
	}
	.technology{
		&__image{
			&--mobile{
				display: none;
			}
		}
	}
</style>