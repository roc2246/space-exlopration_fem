<script>
	import TopRow from '../../lib/TopRow.svelte';

	export let data;
	const destination = data.destination;
	let no = 0;
</script>

<section class="page-container" id="destination-container">
	<TopRow />

	<main class="destination main">
		<h2 class="destination__title">
			<span class="destination__title--no">01</span>
			<span class="destination__title--name">PICK YOUR DESTINATION</span>
		</h2>
		<section class="destination__image">
			<img
				class="destination__image--image"
				src={destination[no].images.png}
				alt={destination[no].name}
			/>
		</section>

		<section class="destination__select">
			{#each destination as place, i}
				<h1 on:keydown on:click={() => (no = i)} class="destination__select--no">
					{place.name}
				</h1>
			{/each}
		</section>
		<section class="destination__heading">
			<h1 class="destination__heading--primary">{destination[no].name.toUpperCase()}</h1>
		</section>
		<p class="destination__description">
			{destination[no].description}
		</p>
		<section class="destination__stats">
			<div class="destination__stats--distance">
				<h6>AVG. DISTANCE</h6>
				<h2>{destination[no].distance}</h2>
			</div>
			<div class="destination__stats--time">
				<h6>EST. TRAVEL TIME</h6>
				<h2>{destination[no].travel}</h2>
			</div>
		</section>
	</main>
</section>

<style lang="scss">
	@import '../../styles/global.scss';
	.destination {
		display: grid;
		grid-template-columns: repeat(2, auto);
		&__image {
			&--image {
				max-width: 100%;
			}
		}
	}
</style>
