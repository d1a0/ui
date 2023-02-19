<script>
	import Shell from '$docs/Shell.svelte';

	const settings = {
		name: 'Button',
		description: 'Buttons make actions.',
		examples: [
			{
				title: 'Buttons',
				description: '',
				code: `<button class="btn btn-primary" type="button">primary</button>
<button class="btn btn-secondary" type="button">secondary</button>
<button class="btn btn-neutral" type="button">neutral</button>
<button class="btn btn-ghost" type="button">ghost</button>`
			},
			{
				title: 'Leveled Buttons',
				description: '',
				code: `<button class="btn btn-success" type="button">success</button>
<button class="btn btn-warning" type="button">warning</button>
<button class="btn btn-error" type="button">error</button>`
			},
			{
				title: 'Outline Buttons',
				description: '',
				code: `<button class="btn btn-primary btn-outline" type="button">primary</button>
<button class="btn btn-secondary btn-outline" type="button">secondary</button>
<button class="btn btn-neutral btn-outline" type="button">neutral</button>
<button class="btn btn-success btn-outline" type="button">success</button>
<button class="btn btn-warning btn-outline" type="button">warning</button>
<button class="btn btn-error btn-outline" type="button">error</button>`
			},
			{
				title: 'Compact Buttons',
				description: '',
				code: `<button class="btn btn-compact" type="button">success</button>`
			},
			{
				title: 'Square Button',
				description: '',
				code: `<button class="btn btn-square" type="button">
  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
</button>`
			},
			{
				title: 'Loading Buttons',
				description: '',
				code: `<div class="flex gap-4">
  <button class="btn btn-loading" type="button">loading</button>
  <button class="btn btn-square btn-loading" type="button"></button>
<div/>`
			},
		]
	};
</script>

<Shell {settings} />
