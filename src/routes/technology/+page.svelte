<script>
    export let data
    const technology = data.technology
</script>

{#each technology as item}
	<p>{item.name}</p>
{/each}
