<script>
    export let data
    const destination = data.destination

    import { setBackground } from '../../js/global';

// setBackground('../../assets/destination/image-mars.png');
</script>

{#each destination as place}
	<p>{place.name}</p>
{/each}
