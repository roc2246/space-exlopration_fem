<script>
	export let data;
	const technology = data.technology;

	import { setBackground } from '../../js/global';

	// setBackground('../../assets/destination/image-titan.png');
</script>

{#each technology as item}
	<p>{item.name}</p>
{/each}
