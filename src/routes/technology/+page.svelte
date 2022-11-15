<script>
    export let data
    const technology = data.technology
</script>

<h1>COMING SOON</h1>
{#each technology as item}
	<p>{item.name}</p>
{/each}
