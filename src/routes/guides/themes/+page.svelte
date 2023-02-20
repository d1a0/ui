<script lang="ts">
	import TableOfContents from '$lib/components/TableOfContents.svelte';
	import ThemeSelect from '$docs/ThemeSelect.svelte';
	import DocsShell from '$lib/components/PageShell.svelte';

	const themes = [
		'zimablue',
		'zimablue-dark',
		'slimegreen',
		'slimegreen-dark',
		'peppapink',
		'peppapink-dark'
	];
</script>

<DocsShell>
	<svelte:fragment slot="header">
		<h1 class="text-4xl font-extrabold mb-4">Themes</h1>
		<p class="mb-8">You can try other themes here and yea create your own one.</p>
	</svelte:fragment>

	<h2 class="text-xl sm:text-2xl font-semibold mb-4">
		<a class="mr-1 text-primary-base" href="#Builtin-Themes">#</a>
		Builtin Themes
	</h2>
	<p class="mb-4">Tap to select a theme.</p>
	<ThemeSelect {themes} />

	<div class="py-4"></div>

	<h2 class="text-xl sm:text-2xl font-semibold mb-4">
		<a class="mr-1 text-primary-base" href="#Theme-Generator">#</a>
		Theme Generator
	</h2>
	<p class="mb-4">Coming soon ...</p>

	<svelte:fragment slot="sidebar">
		<div class="sticky top-20">
			<TableOfContents />
		</div>
	</svelte:fragment>
</DocsShell>
