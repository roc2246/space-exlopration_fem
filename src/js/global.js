import { onMount } from 'svelte';

export function setBackground(background) {
    onMount(() => {
    document.body.style.background = `url('${background}')`
    console.log(document.body.style['background-image'])
    })
  }