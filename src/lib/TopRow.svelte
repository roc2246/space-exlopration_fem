<script>
	import Nav from './Nav.svelte';
</script>

<section class="top-row">
    <div class="top-row__img">
        <img src="./assets/shared/logo.svg" alt="">
    </div>
	<Nav />
</section>

<style lang="scss">
    .top-row{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>
