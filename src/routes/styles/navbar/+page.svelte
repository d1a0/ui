<script>
	import Shell from '$docs/Shell.svelte';

	const settings = {
		name: 'Navbar',
		description: 'Navbar is the layout mainly for headers.',
		examples: [
			{
				title: 'Navbar',
				description: '',
				code: `<header class="navbar w-full">
  <div class="navbar-left">left</div>
  <div class="navbar-middle">middle</div>
  <div class="navbar-right">right</div>
</header>`
			},
		]
	};
</script>

<Shell {settings} />
