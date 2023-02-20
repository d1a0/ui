<script>
	import Shell from '$docs/Shell.svelte';

	const settings = {
		name: 'Dropdown',
		description: 'Dropdown ',
		examples: [
      {
				title: 'Aligned to the edges',
				description: '',
				code: `<div class="flex flex-wrap gap-4">
  <details class="dropdown dropdown-overlay dropdown-t">
    <summary class="btn btn-primary">top</summary>
    <div class="dropdown-main w-32 p-4">XOO</div>
  </details>
  <details class="dropdown dropdown-overlay dropdown-r">
    <summary class="btn btn-primary">right</summary>
    <div class="dropdown-main w-32 p-4">XOO</div>
  </details>
  <details class="dropdown dropdown-overlay dropdown-b">
    <summary class="btn btn-primary">bottom</summary>
    <div class="dropdown-main w-32 p-4">XOO</div>
  </details>
  <details class="dropdown dropdown-overlay dropdown-l">
    <summary class="btn btn-primary">left</summary>
    <div class="dropdown-main w-32 p-4">XOO</div>
  </details>
</div`
			},
			{
				title: 'Aligned to the corners',
				description: '',
				code: `<div class="flex flex-wrap gap-4">
  <details class="dropdown dropdown-overlay dropdown-bl">
    <summary class="btn btn-primary">bottom left</summary>
    <div class="dropdown-main w-32 p-4">XOO</div>
  </details>
  <details class="dropdown dropdown-overlay dropdown-br">
    <summary class="btn btn-primary">bottom right</summary>
    <div class="dropdown-main w-32 p-4">XOO</div>
  </details>
  <details class="dropdown dropdown-overlay dropdown-tl">
    <summary class="btn btn-primary">top left</summary>
    <div class="dropdown-main w-32 p-4">XOO</div>
  </details>
  <details class="dropdown dropdown-overlay dropdown-tr">
    <summary class="btn btn-primary">top right</summary>
    <div class="dropdown-main w-32 p-4">XOO</div>
  </details>
</div`
			},
      {
				title: 'Dropdown with an icon',
				description: '',
				code: `<details class="dropdown dropdown-overlay dropdown-bl">
  <summary class="btn btn-primary">
    dropdown
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5H7z"/></svg>
  </summary>
  <div class="dropdown-main w-32 p-4">XOO</div>
</details>`
			},
		]
	};
</script>

<Shell {settings}>
  <svelte:fragment slot="extra">
    <p class="mb-8">Dropdown is implementated by tag <code class="text-sm">&lt;details/&gt;</code>.</p>
  </svelte:fragment>
</Shell>

