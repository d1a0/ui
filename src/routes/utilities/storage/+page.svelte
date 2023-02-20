<script>
	import Shell from '$docs/Shell.svelte';

	const settings = {
		name: 'Storage',
		description: 'Storage has some utilities related to localStorage or sessionStorage',
		examples: [
			{
				title: 'Storage Store',
				description: `Storage Store implements a Svelte store using localStorage and sessionStorage APIs.
So you can subscribe to data updates in local or session storages of your browser. Here's a simple example.`,
				code: `<script>
  import { writable } from '$lib/utilities/storage/store';

  const theme = writable("storeTheme", "zimablue");
<\/script>

<div>Current theme: {$theme}</div`,
        preview: false
			},
		]
	};
</script>

<Shell {settings} />