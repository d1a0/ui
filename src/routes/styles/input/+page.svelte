<script>
	import Shell from '$docs/Shell.svelte';

	const settings = {
		name: 'Input',
		description: 'Inputs are used to enter texts',
		examples: [
			{
				title: 'Text input',
				description: '',
				code: `<input class="input" type="text" placeholder="Input here" />`
			},
      {
				title: 'Text input but reversed',
				description: '',
				code: `<input class="input input-reversed" type="text" placeholder="Input here" />`
			},
      {
				title: 'Text input but compact',
				description: '',
				code: `<input class="input input-compact" type="text" placeholder="Input here" />`
			},
		]
	};
</script>

<Shell {settings} />
