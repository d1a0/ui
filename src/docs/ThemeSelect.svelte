<script lang="ts">
	import { theme } from './stores';

	export let themes: string[];

	let using: string;

	$: if (using) {
		theme.set(using);
	}
</script>

<div class="flex flex-wrap gap-4">
	{#each themes as th}
		<div class="card" data-theme={th}>
			<input
				class="radio radio-box"
				type="radio"
				id="radio-theme-{th}"
				value={th}
				bind:group={using}
			/>
			<label class="flex w-64 h-48" for="radio-theme-{th}">
				<div class="w-1/4 h-full p-1 border-r border-default-focus">
					<div class="w-full h-3 mt-4 rounded-sm bg-primary-base" />
				</div>
				<div class="flex-1 h-full flex flex-col items-center">
					<div class="w-1/2 h-2 mt-2 rounded-sm bg-default-focus" />
					<div class="text-xl font-semibold my-7">{th}</div>
					<div class="grid grid-cols-2 gap-2">
						<div class="card card-center font-medium bg-primary-base text-primary-text w-12 h-6">A</div>
						<div class="card card-center font-medium bg-secondary-base text-secondary-text w-12 h-6">A</div>
						<div class="card card-center font-medium bg-neutral-base text-neutral-text w-12 h-6">A</div>
						<div class="card card-center font-medium bg-default-base text-default-text w-12 h-6">A</div>
					</div>
				</div>
			</label>
		</div>
	{/each}
</div>
