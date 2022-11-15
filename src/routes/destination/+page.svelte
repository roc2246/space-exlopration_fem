<script>
    export let data
    const destination = data.destination
</script>

{#each destination as place}
	<p>{place.name}</p>
{/each}
