<script>
	import Shell from '$docs/Shell.svelte';

	const settings = {
		name: 'Divider',
		description: 'Dividers separates groups of contents',
		examples: [
      {
				title: 'Divider in a card',
				description: '',
				code: `<div class="card w-32 p-4">
  <div>XOO</div>
  <hr class="divider" />
  <div>UI</div>
</div>`
			},
			{
				title: 'Divider in a menu',
				description: '',
				code: `<nav class="menu w-64">
  <ul>
    <li class="menu-title">fruits</li>
    <li><a href="/">Apple</a></li>
    <li><a href="/">Apple</a></li>
    <hr class="divider" />
    <li class="menu-title">Meat</li>
    <li><a href="/">Beef</a></li>
  </ul>
</nav>`
			},
		]
	};
</script>

<Shell {settings} />

