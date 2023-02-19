<script lang="ts">
	import CodePreview from '$lib/components/CodePreview.svelte';
	import PageShell from '$lib/components/PageShell.svelte';
	import TableOfContents from '$lib/components/TableOfContents.svelte';
	import type { ShellSettings } from './types';

	export let settings: ShellSettings;
</script>

<!-- <div class="h-auto">
	<div class="mb-8">
		<h1 class="text-4xl font-extrabold mb-4">
			{settings.name}
			{#if settings.status}
			{@const status = settings.status}
				<span class="badge badge-{status}">{status}</span>
			{/if}
		</h1>
		<slot name="extra">
			<p>{settings.description}</p>
		</slot>
	</div>
	<div class="grid gap-8">
		{#if $$slots.default}
			<slot />
		{:else}
			{#each settings.examples as { title, description, code }}
				<CodePreview {title} {description} {code}>
					{@html code}
				</CodePreview>
			{/each}
		{/if}
	</div>
</div>
<div class="w-64 ml-8 hidden xl:block">
	<div class="sticky top-20">
		<TableOfContents />
	</div>
</div> -->

<PageShell>
	<svelte:fragment slot="header">
		<h1 class="text-4xl font-extrabold mb-4">
			{settings.name}
			{#if settings.status}
			{@const status = settings.status}
				<span class="badge badge-{status}">{status}</span>
			{/if}
		</h1>
		<slot name="extra">
			<p class="mb-8">{settings.description}</p>
		</slot>
	</svelte:fragment>

	<div class="grid gap-8">
		{#if $$slots.default}
			<slot />
		{:else}
			{#each settings.examples as { title, description, code }}
				<CodePreview {title} {description} {code}>
					{@html code}
				</CodePreview>
			{/each}
		{/if}
	</div>

	<svelte:fragment slot="sidebar">
		<div class="sticky top-20">
			<TableOfContents />
		</div>
	</svelte:fragment>
</PageShell>
