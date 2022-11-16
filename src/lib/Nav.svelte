<script>
	let toggleSrc = './assets/shared/icon-hamburger.svg';
</script>

<nav class="nav">
	<div class="nav__mobile-toggle">
		<img src={toggleSrc} alt="mobile-toggle" />
	</div>
	<a data-sveltekit-prefetch href="/" class="nav__link">
		<span class="nav__link--no">00&nbsp;</span>
		<span class="nav__link--location">Home</span>
	</a>
	<a data-sveltekit-prefetch href="/destination" class="nav__link">
		<span class="nav__link--no">01&nbsp;</span>
		<span class="nav__link--location">Destination</span>
	</a>
	<a data-sveltekit-prefetch href="/crew" class="nav__link">
		<span class="nav__link--no">02&nbsp;</span>
		<span class="nav__link--location">Crew</span>
	</a>
	<a data-sveltekit-prefetch href="/technology" class="nav__link">
		<span class="nav__link--no">03&nbsp;</span>
		<span class="nav__link--location">Technology</span>
	</a>
</nav>

<style lang="scss">
	@import '../styles/global.scss';
	.nav {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;

		border: solid;
		z-index: 0;
		width: 50%;
		height: 5rem;
		margin-right: -2rem;
		&__mobile-toggle {
			display: none;
		}
		&__link {
			@include centerChild();

			text-decoration: none;
			margin-left: 1rem;
			margin-right: 1rem;
		}
	}

	@media (max-width: $tablet) {
		.nav {
			width: 75%;
		}
	}

	@media (max-width: $mobile) {
		.nav {
			@include centerChild();
			width: auto;
			margin-right: 0;
			border: none;
			&__mobile-toggle {
				display: inline-block;
			}
			&__link {
				display: none;
			}
		}
	}
</style>
