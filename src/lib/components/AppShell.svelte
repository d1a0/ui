<script>
	export let id = "app";
</script>

<div class="h-full w-full bg-default-base text-default-text">
	<div class="drawer drawer-l drawer-fit">
		<input class="drawer-toggler" type="checkbox" {id} />
		<div class="drawer-main">
			<header class="navbar sticky top-0 z-30">
				<div class="navbar-left">
					{#if $$slots["app-sidebar"]}
					<label class="btn btn-square btn-ghost inline-flex sm:hidden" for={id}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16M4 6h16M4 18h16"/></svg>
					</label>
					{/if}
					<slot name="app-head-left" />
				</div>
				<div class="navbar-center">
					<slot name="app-head-center" />
				</div>
				<div class="navbar-right">
					<slot name="app-head-right" />
				</div>
			</header>
			<section id="{id}-page" class="p-4 sm:p-6 min-h-[65%]">
				<slot />
			</section>
			<footer class="border-t border-default-focus">
				<slot name="app-foot" />
			</footer>
		</div>
		<div class="drawer-side">
			<label class="drawer-overlay" for={id} />
			<slot name="app-sidebar" />
		</div>
	</div>
</div>