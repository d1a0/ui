<script>
	import Shell from '$docs/Shell.svelte';
	import clipboard from '$lib/actions/clipboard';
	import CodePreview from '$lib/components/CodePreview.svelte';

	const settings = {
		name: 'Clipboard',
		description: 'Clipboard can be bound to an element to copy texts.',
		examples: [
			{
				title: 'Clipboard',
				description: 'Click the button below and then paste in somewhere else.',
				code: `<script>
  const text = "Text to be copied."
<\/script>

<button class="btn btn-primary" use:clipboard={text}>Copy</button>`,
        preview: true
			},
		]
	};

  const text = "Text to be copied."
</script>

<Shell {settings}>
  {@const examples = settings.examples}
  <CodePreview title={examples[0].title} description={examples[0].description} code={examples[0].code}>
    <button class="btn btn-primary" use:clipboard={text}>Copy</button>
  </CodePreview>
</Shell>