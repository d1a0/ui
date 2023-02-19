<script>
	import CodeBlock from './CodeBlock.svelte';

	export let title = 'title';
	export let description = '';
	export let code = '</>';

	const id = title.replaceAll(' ', '-');
	const language = 'html';
</script>

<div class="overflow-x-auto w-full bg-default-base">
	<h2 {id} class="text-xl sm:text-2xl font-semibold mb-4">
		<a class="mr-1 text-primary-base" href="#{id}">#</a>
		{title}
	</h2>
	<p>{description}</p>
	<div class="workbench my-4"><slot /></div>
	<CodeBlock {code} {language} />
</div>
