<script>
	import Shell from '$docs/Shell.svelte';
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import CodePreview from '$lib/components/CodePreview.svelte';

	const settings = {
		name: 'CodeBlock',
		description: 'CodeBlocks contain highlighted source code.',
		examples: [
			{
				title: 'CodeBlock',
				description: '',
				code: `<script>
  const code = \`
#include <stdio.h>

int main(void) {
    printf("Hello, world.");
    return 0;
}\`
<\/script>        
<CodeBlock {code} language="c" />`
			}
		]
	};
</script>

<Shell {settings}>
  {@const examples = settings.examples}
  <CodePreview title={examples[0].title} code={examples[0].code}>
    <CodeBlock language="c" code={`
#include <stdio.h>
      
int main(void) {
    printf("Hello, world.");
    return 0;
}`} />
  </CodePreview>
</Shell>
