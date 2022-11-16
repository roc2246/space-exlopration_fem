<script>
	import Nav from './Nav.svelte';
</script>

<section class="top-row">
    <div class="top-row__img">
        <img src="./assets/shared/logo.svg" alt="">
    </div>
    <div class="top-row__line">
        <hr>
    </div>
	<Nav />
</section>

<style lang="scss">
    @import "../styles/global.scss";
    .top-row{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        

        &__line{
        @include centerChild();

            width: 20rem;
            & > hr {
                width: 100%;
                height: .01rem;
            }
        }
    }
</style>
