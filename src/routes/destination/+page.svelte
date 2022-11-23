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
		<section class="destination__description">
			<p class="destination__description--text">
				{destination[no].description}
			</p>
		</section>

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
		&__title {
			grid-row: 1;
			grid-column-start: 1;
			grid-column-end: 2;
		}
		&__image {
			grid-row-start: 2;
			grid-row-end: 6;
			grid-column: 1;

			padding: 2rem;
			&--image {
				max-width: 100%;
			}
		}

		&__select {
			grid-column: 2;
			grid-row: 2;

			display: flex;
			flex-direction: row;
		}
		&__heading {
			grid-column: 2;
			grid-row: 3;
		}
		&__description {
			grid-column: 2;
			grid-row: 4;

			max-width: 23rem;
		}
		&__stats {
			grid-column: 2;
			grid-row: 5;

			display: flex;
			flex-direction: row;
		}
	}

	@media (max-width: $tablet) {
		.destination {
			grid-template-columns: auto;
			margin-left: 0;
			margin-right: 0;
			&__title {
				@include centerChild();
			}
			&__select {
				grid-column: 1;
				justify-content: center;
			}
			&__heading {
				grid-column: 1;
				text-align: center;
			}
			&__description {
				grid-column: 1;
				margin-left: auto;
				margin-right: auto;
				max-width: 30rem;
			}
			&__stats {
				grid-column: 1;
				justify-content: center;
			}
			&__image {
				grid-row-start: 6;
				@include centerChild();
			}
		}
	}
	
	@media (max-width: $mobile) {
		.destination {
			grid-template-columns: auto;
			margin-left: 0;
			margin-right: 0;
			&__title {
				grid-row: 1;
			}
			&__select {
				grid-row: 2;

				justify-content: center;
			}
			&__image {
				grid-row: 3;
			}
			
		
			&__heading {
				grid-row: 4;

				text-align: center;
			}
			&__description {
				grid-row: 5;

				margin-left: auto;
				margin-right: auto;
				max-width: 30rem;
			}
			&__stats{
				grid-row: 6;
			}
		}
	}

</style>
