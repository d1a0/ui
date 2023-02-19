<script>
	import Shell from '$docs/Shell.svelte';

	const settings = {
		name: 'Card',
		description: 'Cards contains any content.',
		examples: [
			{
				title: 'Cards',
				description: '',
				code: '<div class="card w-32 h-32">Some Text</div>'
			},
			{
				title: 'Cards with center-aligned contents',
				description: '',
				code: `<div class="card card-center w-32 h-32">Some Text</div>`
			},
      {
				title: 'Circle cards',
				description: '',
				code: `
<div class="card card-center card-circle w-32 h-32">Some Text</div>`
			},
      {
				title: 'Colorized cards',
				description: '',
				code: `
<div class="flex flex-wrap gap-4">
  <div class="card card-primary w-32 h-32">Some Text</div>
  <div class="card card-secondary w-32 h-32">Some Text</div>
  <div class="card card-neutral w-32 h-32">Some Text</div>
  <div class="card card-success w-32 h-32">Some Text</div>
  <div class="card card-warning w-32 h-32">Some Text</div>
  <div class="card card-error w-32 h-32">Some Text</div>
</div>`
			},
		]
	};
</script>

<Shell {settings} />
