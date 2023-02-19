<script>
	import Shell from '$docs/Shell.svelte';

	const settings = {
		name: 'Switch',
		description: 'Switches are used to input boolean values.',
		examples: [
      {
				title: 'Switch',
				description: '',
				code: `<input class="switch" type="checkbox" />`
			},
      {
				title: 'Square switch',
				description: '',
				code: `<input class="switch switch-square" type="checkbox" />`
			},
			{
				title: 'Colorized switches',
				description: '',
				code: `<div class="flex flex-wrap gap-4">
  <input class="switch switch-primary" type="checkbox" />
  <input class="switch switch-secondary" type="checkbox" />
  <input class="switch switch-success" type="checkbox" />
  <input class="switch switch-warning" type="checkbox" />
  <input class="switch switch-error" type="checkbox" />
</div>`
			},
		]
	};
</script>

<Shell {settings} />
