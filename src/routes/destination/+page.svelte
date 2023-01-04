<script>
	import TopRow from '../../lib/TopRow.svelte';

	export let data;
	const destination = data.destination;
	let no = 0;

	const selected = (z) => {
		const selections = document.getElementsByClassName('destination__select--no');
		for (let i = 0; i < selections.length; i++) {
			if (selections[i] !== selections[z]) {
				selections[i].style.borderBottom = 'none';
				selections[i].onmouseout = () => {
					selections[i].style.borderBottom = 'none';
				};
				selections[i].onmouseover = () => {
					selections[i].style.borderBottom = 'solid';
				};
			} else {
				selections[i].onmouseout = '';
				selections[i].onmouseover = '';
			}
		}
		selections[z].style.borderBottom = 'solid';
		no = z;
	};
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
				<h1 on:keydown on:click={() => selected(i)} class="destination__select--no">
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

	@include backgroundImage('destination', 'desktop');

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
			max-width: 20rem;

			justify-content: space-between;

			& > * {
				cursor: pointer;
			}
			&--no {
				&:nth-child(1){
					border-bottom: solid;

				}
				&:hover {
					border-bottom: solid;
				}
			}
		}
		&__heading {
			grid-column: 2;
			grid-row: 3;
			&--primary {
				font-size: 6rem;

				margin-top: 0;
				margin-bottom: 0;
			}
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

			max-width: 20rem;
			justify-content: space-between;
		}
	}

	@media (max-width: $tablet) {
		@include backgroundImage('destination', 'tablet');
		#destination-container {
			height: 100%;
		}
		.destination {
			grid-template-columns: auto;
			margin-left: 0;
			margin-right: 0;
			&__image {
				grid-row: 1;
				margin-top: 4rem;
				@include centerChild();
			}
			&__select {
				grid-column: 1;
				justify-content: space-evenly;
				max-width: 100%;
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
				justify-content: space-evenly;
				max-width: 100%;
			}
		}
	}

	@media (max-width: $mobile) {
		@include backgroundImage('destination', 'mobile');

		.destination {
			grid-template-columns: auto;
			margin-left: 0;
			margin-right: 0;
			&__title {
				grid-row: 1;
			}

			&__heading {
				text-align: center;
			}
			&__description {
				grid-row: 5;

				margin-left: auto;
				margin-right: auto;
				max-width: 30rem;
			}
			&__stats {
				grid-row: 6;
			}
		}
	}
</style>
