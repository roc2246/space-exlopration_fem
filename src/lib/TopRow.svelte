<script>
	import Nav from './Nav.svelte';
</script>

<section class="top-row">
	<div class="top-row__img">
		<img src="./assets/shared/logo.svg" alt="" />
	</div>
	<div class="top-row__line">
		<hr />
	</div>
	<Nav />
</section>

<style lang="scss">
	@import '../styles/global.scss';
	.top-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		&__img {
			@include centerChild();
		}
		&__line {
			@include centerChild();
			z-index: 1;
			width: 45%;
			margin-right: -8%;
			& > hr {
				width: 100%;
				height: 0.01rem;
			}
		}
	}
    @media(max-width: $tablet) {
        .top-row{
            &__line{
                display: none;
            }
        }
    }
</style>
