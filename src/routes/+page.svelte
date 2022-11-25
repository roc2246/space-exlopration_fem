<script>
	import TopRow from '../lib/TopRow.svelte';
</script>

<section class="page-container" id="home-container">
	<TopRow />
	<main class="home-content main">
		<h3 class="home-content__secondary-heading">SO, YOU WANT TO TRAVEL TO</h3>
		<h1 class="home-content__primary-heading">SPACE</h1>
		<p class="home-content__main-text">
			Let’s face it; if you want to go to space, you might as well genuinely go to outer space and
			not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly
			out of this world experience! Explore
		</p>
		<div class="home-content__explore">
			<h3 class="home-content__explore--text">EXPLORE</h3>
		</div>
	</main>
</section>

<style lang="scss">
	@import '../styles/global.scss';
	@include backgroundImage('home', 'desktop');

	.home-content {
		display: grid;
		grid-template-columns: auto max(2rem, 50%) 1fr;

		margin-top: 10rem;
		&__secondary-heading {
			grid-row: 1;

			font-weight: 100;
		}
		&__primary-heading {
			grid-row-start: 2;
			grid-row-end: 3;

			font-size: 8rem;

			margin-top: 0;
			margin-bottom: 0;
		}
		&__main-text {
			grid-row-start: 3;
			grid-row-end: 4;
			width: 24rem;
		}
		&__explore {
			grid-column-start: 3;
			grid-column-end: 4;
			grid-row-start: 2;
			grid-row-end: 4;

			border-radius: 90%;
			width: 15rem;
			height: 15rem;

			background-color: white;
			color: black;

			font-family: $heading-font;
			font-size: 1.5rem;

			margin-top: 1rem;
			margin-bottom: 1rem;

			@include centerChild();
		}
	}

	@media (max-width: $tablet) {
	@include backgroundImage('home', 'tablet');
		.home-content {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 5rem;

			&__main-text {
				width: 25rem;
			}
		}
	}
	@media (max-width: $mobile) {
	@include backgroundImage('home', 'mobile');
		.home-content {
			margin-top: 0.25rem;

			&__primary-heading{
				width: 25rem;
				text-align: center;
			}

			&__main-text {
				width: 20rem;
			}
		}
	}
</style>
