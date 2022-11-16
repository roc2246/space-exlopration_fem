<nav class="nav">
	<a data-sveltekit-prefetch href="/" class="nav__link">
		<span class="nav__link--no">00</span>
		<span class="nav__link--location">Home</span>
	</a>
	<a data-sveltekit-prefetch href="/destination" class="nav__link">
		<span class="nav__link--no">01</span>
		<span class="nav__link--location">Destination</span>
	</a>
	<a data-sveltekit-prefetch href="/crew" class="nav__link">
		<span class="nav__link--no">02</span>
		<span class="nav__link--location">Crew</span>
	</a>
	<a data-sveltekit-prefetch href="/technology" class="nav__link">
		<span class="nav__link--no">03</span>
		<span class="nav__link--location">Technology</span>
	</a>
</nav>

<style lang="scss">
	.nav {
		display: flex;
		flex-direction: row;
		border: solid;
		&__link {
			display: flex;
			justify-content: center;
			align-items: center;

			text-decoration: none;
			margin-left: 0.25rem;
			margin-right: 0.25rem;
		}
	}
</style>
