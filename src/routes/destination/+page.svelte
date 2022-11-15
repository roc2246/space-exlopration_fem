<script>
    export let data
    const destination = data.destination
</script>

<h1>COMING SOON</h1>
{#each destination as place}
	<p>{place.name}</p>
{/each}
