<script>
	import TopRow from '../../lib/TopRow.svelte';

	export let data;
	const technology = data.technology;
	let no = 0;
</script>

<section class="page-container" id="technology-container">
	<TopRow />
	<main class="technology main">
		<h2 class="technology__title">
			<span class="technology__title--no">03</span>
			<span class="technology__title--name">SPACE LAUNCH 101</span>
		</h2>
		<section class="technology__select">
			{#each technology as item, i}
				<div on:keydown on:click={() => (no = i)} class="technology__select--container">
					<h1>
						{i + 1}
					</h1>
				</div>
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
				src={technology[no].images.portrait}
				alt={technology[no].name}
			/>
			<img
				class="technology__image--mobile"
				src={technology[no].images.landscape}
				alt={technology[no].name}
			/>
		</section>
	</main>
</section>

<style lang="scss">
	@import '../../styles/global.scss';

	@include backgroundImage('technology', 'desktop');

	.technology__image--desktop,
	.technology__image--mobile {
		max-width: 100%;
		height: auto;
	}

	.technology {
		display: grid;
		grid-template-columns: 4rem auto auto;
		margin-right: 0;
		&__title {
			grid-row: 1;
			grid-column-start: 1;
			grid-column-end: 3;
		}

		&__select {
			grid-column: 1;
			grid-row-start: 3;
			grid-row-end: 5;

			display: flex;
			flex-direction: column;
			gap: 2rem;

			&--container {
				cursor: pointer;
				border: solid;
				border-radius: 50%;
				width: 3.5rem;
				height: auto;

				@include centerChild();

				&:hover{
					background-color: white;
					color: black;
				}
			}
		}
		&__heading,
		&__description {
			margin-left: 2rem;
		}
		&__heading {
			grid-row: 3;

			&--primary {
				margin-top: 0;
				margin-bottom: 0;
				font-size: 4rem;
			}
		}
		&__description {
			grid-column: 2;
			grid-row: 4;
			max-width: 22rem;
			margin-right: 2rem;
		}
		&__image {
			grid-column: 3;
			grid-row-start: 2;
			grid-row-end: 6;
			margin-left: auto;
			margin-right: -2rem;
			&--mobile {
				display: none;
			}
		}
	}
	@media (max-width: $tablet) {
		@include backgroundImage('technology', 'tablet');

		#technology-container {
			padding-right: 2rem;
			width: auto;
			height: 100%;
		}

		.technology {
			grid-template-columns: auto;
			margin-left: -2rem;
			margin-right: 0;
			width: 100vw;
			&__title {
				margin-left: 2rem;
			}
			&__image {
				grid-row: 2;
				grid-column: 1;
				margin-left: 0rem;
				margin-right: 0rem;
				margin-top: 2rem;
				&--desktop {
					display: none;
				}
				&--mobile {
					display: block;
				}
			}
			&__select {
				grid-row: 3;
				flex-direction: row;
				justify-content: space-evenly;
				margin-top: 1rem;
				margin-bottom: 1rem;
			}
			&__heading {
				grid-row: 4;
				margin-left: 1rem;
				margin-right: 1rem;
				& > * {
					text-align: center;
				}
			}
			&__description {
				grid-row: 5;
				grid-column: 1;
				margin-left: auto;
				margin-right: auto;
				text-align: center;
			}
		}
		@media (max-width: $mobile) {
			@include backgroundImage('technology', 'mobile');

			#technology-container {
			padding-right: 2rem;
			width: auto;
			height: 100vh;
		}


			.technology {
				grid-template-columns: auto;
				margin-left: -2rem;
				margin-right: 0;
				&__title {
					grid-row: 1;
					text-align: center;
					grid-column: 1;
					margin-left: 0rem;
				}

				&__image {
					grid-row: 2;
					grid-column: 1;
				}
				&__select {
					grid-row: 3;
					grid-column: 1;

					flex-direction: row;
					justify-content: center;

					margin-top: 1rem;
					margin-bottom: 1rem;
				}

				&__heading {
					grid-row: 4;
					grid-column: 1;
					text-align: center;
					&--primary{
						font-size: 2rem;

					}
				}
				&__description {
					grid-row: 5;
					grid-column: 1;
					max-width: 30rem;

					margin-right: 1rem;
					margin-left: 1rem;
				}
			}
		}
	}
</style>
