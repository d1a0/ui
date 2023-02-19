<script>
	import Shell from '$docs/Shell.svelte';

	const settings = {
		name: 'Alert',
		description: 'Alerts contain leveled messages.',
		examples: [
			{
				title: 'Success Alert',
				description: '',
				code: '<div class="alert alert-success">Successfully renamed repository</div>'
			},
			{
				title: 'Warning Alert',
				description: '',
				code: `<div class="alert alert-warning">Slow network detected</div>`
			},
			{
				title: 'Error Alert',
				description: '',
				code: `<div class="alert alert-error">Failed to rename repository</div>`
			}
		]
	};
</script>

<Shell {settings} />
