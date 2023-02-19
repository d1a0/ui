<script>
	import Shell from '$docs/Shell.svelte';

	const settings = {
		name: 'Workbench',
		description: 'Workbench can be used as a background of some contents.',
		examples: [
			{
				title: 'Workbench',
				description: '',
				code: `<div class="card w-full p-4">
  <div class="workbench">
    <button class="btn btn-primary">Button</button>
  </div>
</div>`
			},
		]
	};
</script>

<Shell {settings} />
