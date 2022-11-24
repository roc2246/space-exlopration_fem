<script>
	import TopRow from '../lib/TopRow.svelte';
</script>

<section class="page-container" id="home-container">
	<TopRow />
	<main class="home-content main">
		<h3 class="home-content__secondary-heading">So, you want to travel to</h3>
		<h1 class="home-content__primary-heading">Space</h1>
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
	// #home-container {
	// 		background-image: url('../assets/home/background-home-desktop.jpg');
	// 	}
@include backgroundImage("home", "desktop");
	.home-content {
		display: grid;
		grid-template-columns: max(15rem, 25%) max(2rem, 50%) 1fr;

		margin-top: 10rem;
		&__secondary-heading {
			grid-row: 1;
		}
		&__primary-heading {
			grid-row-start: 2;
			grid-row-end: 3;
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
			width: 10rem;
			height: 10rem;
			border: solid;

			margin-top: 1rem;
			margin-bottom: 1rem;

			@include centerChild();
		}
	}

	@media (max-width: $tablet) {
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
		.home-content {
			margin-top: 0.25rem;

			&__main-text {
				width: 20rem;
			}
		}
	}
</style>
