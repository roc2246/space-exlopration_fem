<script>
    export let data
    const crew = data.crew

</script>

<h1>COMING SOON</h1>
{#each crew as member}
	<p>{member.name}</p>
{/each}
