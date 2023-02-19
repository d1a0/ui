<script>
	import Shell from '$docs/Shell.svelte';

	const settings = {
		name: 'Badge',
		description: 'Badges hold status messages.',
		examples: [
      {
				title: 'Default badge',
				description: '',
				code: `<span class="badge">Badge</span>`
			},
			{
				title: 'Colorized badges',
				description: '',
				code: `<div class="flex flex-wrap gap-4">
  <span class="badge badge-primary">primary</span>  
  <span class="badge badge-secondary">secondary</span>  
  <span class="badge badge-neutral">neutral</span>  
  <span class="badge badge-success">success</span>  
  <span class="badge badge-warning">warning</span>          
  <span class="badge badge-error">error</span>  
</div>`
			},
			{
				title: 'Outline badges',
				description: '',
				code: `<div class="flex flex-wrap gap-4">
  <span class="badge badge-outline badge-primary">primary</span>  
  <span class="badge badge-outline badge-secondary">secondary</span>  
  <span class="badge badge-outline badge-neutral">neutral</span>  
  <span class="badge badge-outline badge-success">success</span>  
  <span class="badge badge-outline badge-warning">warning</span>          
  <span class="badge badge-outline badge-error">error</span>  
</div>`
			},
		]
	};
</script>

<Shell {settings} />
