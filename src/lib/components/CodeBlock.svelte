<script lang="ts">
	import clipboard from '$lib/actions/clipboard';
	import { highlighter } from '$lib/stores';

	export let code = '</>';
	export let language = 'plaintext';

	let copied = false;
	let formattedCode = '';

	code = code.trim();

	function click() {
		copied = true;
		setTimeout(function () {
			copied = false;
		}, 1500);
	}

	$: if ($highlighter) {
		formattedCode = $highlighter.highlight(code, { language });
	}
</script>

<div class="card codeblock flex flex-col bg-default-focus bg-opacity-70 w-full">
	<header class="flex items-center justify-between pt-2 pb-1 pl-4 pr-2">
		<span class="text-sm text-neutral-base font-semibold uppercase">{language}</span>
		<button class="btn btn-ghost btn-compact" type="button" on:click={click} use:clipboard={code}>
			{copied ? 'Copied ✓' : 'Copy'}
		</button>
	</header>
	<pre class="px-4 pb-4 overflow-x-auto"><code class="language-{language} text-sm">{#if formattedCode}{@html formattedCode}{:else}{code}{/if}</code></pre>
</div>
