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

	.technology__image--desktop,
	.technology__image--mobile {
		max-width: 100%;
		height: auto;
	}

	#technology-container{
		padding-right: 0;
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
				border: solid;
				border-radius: 50%;
				width: 3.5rem;
				height: auto;

				@include centerChild();
			}
		}
		&__heading, &__description {
			margin-left: 2rem;
		}
		&__heading {
			grid-row: 3;
			// &--primary{
			// 	margin-bottom: 0;
			// }
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

		#technology-container{
		padding-right: 2rem;
	}

		.technology {
			grid-template-columns: 4rem auto ;
			margin-left: 0;
	margin-right: 0;
	&__description {
		margin-right: 0;
	}
			&__image {
		grid-row: 6;
		grid-column-start: 1;
		grid-column-end: 3;
				margin-left: 0rem;
			margin-right: 0;
			margin-top: 2rem;
			&--desktop {
				display: none;
			}
			&--mobile {
				display: block;
			}
		}
	}
	@media (max-width: $mobile) {
		.technology {
			margin-top: .25rem;
		
		}
	}
}
</style>
