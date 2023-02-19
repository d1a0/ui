<script lang="ts">
	import AppShell from '$lib/components/AppShell.svelte';
	import SearchBar from '$docs/SearchBar.svelte';
	import SideBar from '$docs/SideBar.svelte';
	import Icons from '$docs/Icons.svelte';
	import { browser } from '$app/environment';
	import { highlighter } from '$lib/stores';
	import { theme } from '$docs/stores';
	
	// set code highlighter.
	import hljs from 'highlight.js';
	highlighter.set({ highlight: (code, opts) => hljs.highlight(code, opts).value });

	// subsribe to theme updates.
	theme.subscribe(function() {
		if (!browser) return;
		document.body.setAttribute("data-theme", $theme);
	});

	import '$lib/styles/index.css'; // all styles classes.
	import '$lib/themes/index.css'; // all themes colors.
</script>

<Icons />

<AppShell>
	<svelte:fragment slot="app-head-left">
		<a class="btn btn-ghost px-2" href="/">
			<h1 class="text-xl sm:text-2xl font-semibold">xooui</h1>
		</a>
	</svelte:fragment>
	<svelte:fragment slot="app-head-center">
		<div class="hidden sm:block md:w-80 lg:w-96 xl:w-[512px]">
			<SearchBar />
		</div>
	</svelte:fragment>
	<svelte:fragment slot="app-head-right">
		<a class="btn btn-ghost" href="/">RSS</a>
		<a class="btn btn-ghost" href="/">GitHub</a>
	</svelte:fragment>
	<svelte:fragment slot="app-sidebar">
		<SideBar />
	</svelte:fragment>
	<svelte:fragment>
		<slot />
	</svelte:fragment>
	<svelte:fragment slot="app-foot">
		<div class="py-8" />
	</svelte:fragment>
</AppShell>
