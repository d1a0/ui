<script>
	import Shell from '$docs/Shell.svelte';
	import CodePreview from '$lib/components/CodePreview.svelte';

	const settings = {
		name: 'CodePreview',
		description: 'CodePreview is used for UI demonstration.',
		examples: [
			{
				title: 'Native code preview',
				description: '',
				code: `
<CodePreview title="Button" description="This is a primary button." code=\`<button class="btn btn-primary" type="button">Button</button>\` />`
			},
			{
				title: 'Custom component preview',
				description: '',
				code: `
<CodePreview title="Button" description="This is a primary button." code="<CustomComponent />">
  <CustomComponent />
</CodePreview>`
			},
		]
	};
</script>

<Shell {settings}>
  {@const examples = settings.examples}
  <CodePreview title={examples[0].title} code={examples[0].code}>
    <div class="card p-4 w-full">
      <CodePreview title="Button" description="This is a primary button." code={`<button class="btn btn-primary" type="button">Button</button>`}>
        <button class="btn btn-primary" type="button">Button</button>
      </CodePreview>
    </div>
  </CodePreview>
	<CodePreview title={examples[1].title} code={examples[1].code}>
    <div class="card p-4 w-full">
      <CodePreview title="Button" description="This is a primary button." code="<CustomComponent />">
				<div>Custom Component</div>
			</CodePreview>
    </div>
  </CodePreview>
</Shell>
