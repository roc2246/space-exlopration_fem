<script>
    export let data
    const crew = data.crew

</script>

{#each crew as member}
	<p>{member.name}</p>
{/each}
