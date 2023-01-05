<script>
	import { onMount } from 'svelte';

	let toggleSrc = 'hamburger';

	onMount(() => {
		const location = window.location.pathname;
		const selections = document.getElementsByClassName('nav__link');
		if(location==="/") {
			selections[0].style.borderBottom = "solid"
		}
		if(location==="/destination") {
			selections[1].style.borderBottom = "solid"
		}
		if(location==="/crew") {
			selections[2].style.borderBottom = "solid"
		}
		if(location==="/technology") {
			selections[3].style.borderBottom = "solid"
		}
	});

</script>

<nav class="nav">
	<div
		class="nav__mobile-toggle"
		on:keydown
		on:click={() => (toggleSrc === 'hamburger' ? (toggleSrc = 'close') : (toggleSrc = 'hamburger'))}
	>
		<img src="./assets/shared/icon-{toggleSrc}.svg" alt="mobile-toggle" />
	</div>
	<!-- Desktop Links -->
	<a data-sveltekit-prefetch href="/" class="nav__link nav__link--desktop">
		<span class="nav__link--no">00&nbsp;</span>
		<span class="nav__link--location">Home</span>
	</a>
	<a data-sveltekit-prefetch href="/destination" class="nav__link nav__link--desktop">
		<span class="nav__link--no">01&nbsp;</span>
		<span class="nav__link--location">Destination</span>
	</a>
	<a data-sveltekit-prefetch href="/crew" class="nav__link nav__link--desktop">
		<span class="nav__link--no">02&nbsp;</span>
		<span class="nav__link--location">Crew</span>
	</a>
	<a data-sveltekit-prefetch href="/technology" class="nav__link nav__link--desktop">
		<span class="nav__link--no">03&nbsp;</span>
		<span class="nav__link--location">Technology</span>
	</a>
	<!-- Mobile Links -->
	{#if toggleSrc === 'close'}
		<a data-sveltekit-prefetch href="/" class="nav__link nav__link--mobile">
			<span class="nav__link--no">00&nbsp;</span>
			<span class="nav__link--location">Home</span>
		</a>
		<a data-sveltekit-prefetch href="/destination" class="nav__link nav__link--mobile">
			<span class="nav__link--no">01&nbsp;</span>
			<span class="nav__link--location">Destination</span>
		</a>
		<a data-sveltekit-prefetch href="/crew" class="nav__link nav__link--mobile">
			<span class="nav__link--no">02&nbsp;</span>
			<span class="nav__link--location">Crew</span>
		</a>
		<a data-sveltekit-prefetch href="/technology" class="nav__link nav__link--mobile">
			<span class="nav__link--no">03&nbsp;</span>
			<span class="nav__link--location">Technology</span>
		</a>
	{/if}
</nav>

<style lang="scss">
	@import '../styles/global.scss';
	.nav {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;

		background-color: rgba(21, 74, 219, 0.151);
		z-index: 0;
		width: 50%;
		height: 5rem;
		margin-right: -2rem;
		&__mobile-toggle {
			display: none;
			cursor: pointer;
		}
		&__link {
			@include centerChild();

			text-decoration: none;
			margin-left: 1rem;
			margin-right: 1rem;
			&:hover {
				border-bottom: solid;
			}
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
			background-color: inherit;

			flex-direction: column;
			height: auto;
			&__mobile-toggle {
				display: inline-block;
			}
			&__link {
				&--desktop {
					display: none;
				}

				// position: absolute;
			}
		}
	}
</style>
