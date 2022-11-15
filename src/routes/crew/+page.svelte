<script>
    export let data
    const crew = data.crew

	import { setBackground } from '../../js/global';

	// setBackground('../../assets/destination/image-mars.png');
</script>

{#each crew as member}
	<p>{member.name}</p>
{/each}
