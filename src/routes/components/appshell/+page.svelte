<script>
	import Shell from '$docs/Shell.svelte';
	import AppShell from '$lib/components/AppShell.svelte';
	import CodePreview from '$lib/components/CodePreview.svelte';

	const settings = {
		name: 'AppShell',
		description: 'AppShell is the app layout.',
		examples: [
			{
				title: 'AppShell',
				description: '',
				code: `<AppShell id="example">
  <svelte:fragment slot="app-head-left">
    <div>left</div>
  </svelte:fragment>
  <svelte:fragment slot="app-head-center">
    <div>middle</div>
  </svelte:fragment>
  <svelte:fragment slot="app-head-right">
    <div>right</div>
  </svelte:fragment>
  <svelte:fragment slot="app-sidebar">
    <div class="card-center w-48">sidebar</div>
  </svelte:fragment>
  <svelte:fragment>
    <div class="card-center h-64">(routes)</div>
  </svelte:fragment>
  <svelte:fragment slot="app-foot">
    <div class="card-center py-4">bottom</div>
  </svelte:fragment>
</AppShell>`
			}
		]
	};
</script>

<Shell {settings}>
  {@const examples = settings.examples}
	<CodePreview code={examples[0].code}>
    <div class="w-full rounded-sm overflow-auto">
      <AppShell id="example">
        <svelte:fragment slot="app-head-left">
          <div>left</div>
        </svelte:fragment>
        <svelte:fragment slot="app-head-center">
          <div>middle</div>
        </svelte:fragment>
        <svelte:fragment slot="app-head-right">
          <div>right</div>
        </svelte:fragment>
        <svelte:fragment slot="app-sidebar">
          <div class="card-center w-48">sidebar</div>
        </svelte:fragment>
        <svelte:fragment>
          <div class="card-center h-64">(routes)</div>
        </svelte:fragment>
        <svelte:fragment slot="app-foot">
          <div class="card-center py-4">bottom</div>
        </svelte:fragment>
      </AppShell>
    </div>
  </CodePreview>
</Shell>
