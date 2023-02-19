<script lang="ts">
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import PageShell from '$lib/components/PageShell.svelte';
	import TableOfContents from '$lib/components/TableOfContents.svelte';
</script>

<PageShell>
	<svelte:fragment slot="header">
		<h1 class="text-4xl font-extrabold mb-4">
      Usage
      <span class="badge badge-warning">warning</span>
    </h1>
		<p class="mb-8">
			XOOUI is still in the proof-of-code stage, you can join us at
			<a class="underline" href="/">github.com/xoodio/ui</a>.
		</p>
	</svelte:fragment>

	<h2 class="text-xl sm:text-2xl font-semibold mb-4">
		<a class="mr-1 text-primary-base" href="#installation">#</a>
		Installation
	</h2>
	<p class="mb-4">
		XOOUI is not available yet but you can clone the code repository and then run the
		documentation site if you are interested now.
	</p>
	<CodeBlock
		code={`git clone https://github.com/xoodio/ui.git
npm run dev
`}
	/>

  <div class="py-4"></div>

	<h2 class="text-xl sm:text-2xl font-semibold mb-4">
		<a class="mr-1 text-primary-base" href="#configuration">#</a>
		Configuration
	</h2>
	<p class="mb-4">
		Add the XOOUI plugin in
		<span class="badge badge-neutral">tailwind.config.cjs</span>
	</p>
	<CodeBlock
    language="javascript"
		code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require("./src/lib/tailwind/index.cjs"),
  ],
}
`}
	/>

	<svelte:fragment slot="sidebar">
		<div class="sticky top-20">
			<TableOfContents />
		</div>
	</svelte:fragment>
</PageShell>
