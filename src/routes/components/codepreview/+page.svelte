<script>
	import Shell from '$docs/Shell.svelte';
	import CodePreview from '$lib/components/CodePreview.svelte';

	const settings = {
		name: 'CodePreview',
		description: 'CodePreview is used for UI demonstration.',
		examples: [
			{
				title: 'CodePreview',
				description: '',
				code: `
<CodePreview title="Button" description="This is a primary button.">
  <button class="btn btn-primary" type="button">Button</button>
</CodePreview>`
			},
		]
	};
</script>

<Shell {settings}>
  {@const examples = settings.examples}
  <CodePreview title={examples[0].title} code={examples[0].code}>
    <div class="card p-4 w-full">
      <CodePreview title="Button" description="This is a primary button." code={examples[0].code}>
        <button class="btn btn-primary" type="button">Button</button>
      </CodePreview>
    </div>
  </CodePreview>
</Shell>
