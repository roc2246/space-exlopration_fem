<script>
	import TopRow from '../../lib/TopRow.svelte';

	export let data;
	const crew = data.crew;
	let no = 0;

	const selected = (z) => {
		const selections = document.getElementsByClassName('crew__select--no');
		for (let i = 0; i < selections.length; i++) {
			if (selections[i] !== selections[z]) {
				selections[i].style.color = 'grey';
				selections[i].onmouseout = () => {
					selections[i].style.color = 'grey';
				};
				selections[i].onmouseover = () => {
					selections[i].style.color = 'white';
				};
			} else {
				selections[i].onmouseout = '';
				selections[i].onmouseover = '';
			}
		}
		selections[z].style.color = 'white';
		no = z;
	};
</script>

<section class="page-container" id="crew-container">
	<TopRow />

	<main class="crew main">
		<h2 class="crew__title">
			<span class="crew__title--no">02</span>
			<span class="crew__title--name">MEET YOUR CREW</span>
		</h2>
		<section class="crew__heading">
			<h3 class="crew__heading--secondary">{crew[no].role.toUpperCase()}</h3>
			<h1 class="crew__heading--primary">{crew[no].name.toUpperCase()}</h1>
		</section>
		<p class="crew__description">
			{crew[no].bio}
		</p>

		<section class="crew__select">
			{#each crew as item, i}
				<h1 on:keydown on:click={() => selected(i)} class="crew__select--no">.</h1>
			{/each}
		</section>

		<section class="crew__image">
			<img class="crew__image--image" src={crew[no].images.png} alt={crew[no].name} />
		</section>
	</main>
</section>

<style lang="scss">
	@import '../../styles/global.scss';
	@include backgroundImage('crew', 'desktop');

	#crew-container{
		padding-bottom: 0rem;
	}

	.crew {
		display: grid;
		grid-template-columns: repeat(2, auto);
		&__title {
			grid-row: 1;
			grid-column-start: 1;
			grid-column-end: 2;
		}
		&__heading {
			grid-column: 1;
			grid-row: 3;
			&--primary{
			font-size: 4rem;
			}
		}
		&__description {
			grid-column: 1;
			grid-row: 4;

			max-width: 23rem;
		}
		&__select {
			grid-column: 1;
			grid-row: 6;

			cursor: pointer;
			display: flex;
			flex-direction: row;

			&--no {
				font-size: 9rem;
				margin-top: 0;
				margin-bottom: 0;
				margin-right: 2rem;
				color: grey;
				&:nth-child(1){
					color: white;
				}
				&:hover{
					color: white;
				}
				
			}
		}
		&__image {
			grid-row-start: 1;
			grid-row-end: 8;
			grid-column: 2;

			padding-top: 2rem;
			padding-left: 2rem;
			padding-right: 2rem;
			padding-bottom: 0rem;
			&--image {
				max-width: 100%;
			}
		}
	}

	@media (max-width: $tablet) {
		@include backgroundImage('crew', 'tablet');

		#crew-container {
			height: 100%;
		}
		.crew {
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
			&__image {
				grid-column: 1;

				grid-row-start: 7;
				@include centerChild();
			}
		}
	}

	@media (max-width: $mobile) {
		@include backgroundImage('crew', 'mobile');

		.crew {
			&__image {
				grid-row: 1;
			}
			grid-template-columns: auto;
			margin-left: 0;
			margin-right: 0;
			&__title {
				display: none;
			}
			&__select {
				grid-row: 2;

				justify-content: center;
			}
			&__heading {
				grid-row: 3;

				text-align: center;
			}
			&__description {
				grid-row: 4;

				margin-left: auto;
				margin-right: auto;
				max-width: 30rem;
			}
		}
	}
</style>
