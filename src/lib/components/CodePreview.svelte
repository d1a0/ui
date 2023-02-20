<script>
	import CodeBlock from './CodeBlock.svelte';

	export let title = 'title';
	export let description = '';
	export let code = '</>';
	export let language = 'html';
	export let preview = true;

	const id = title.replaceAll(' ', '-');
	
</script>

<div class="overflow-x-auto w-full bg-default-base">
	<slot name="title">
		<h2 {id} class="text-xl sm:text-2xl font-semibold md:font-bold mb-4">
			<a class="mr-1 text-primary-base" href="#{id}">#</a>
			{title}
		</h2>
	</slot>
	<slot name="extra">
		<p>{description}</p>
	</slot>
	{#if preview}
		<div class="workbench my-4"><slot /></div>
	{:else}
		<div class="py-2"></div>
	{/if}
	<CodeBlock {code} {language} />
</div>
