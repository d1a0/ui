<script>
	import { page } from '$app/stores';

	const groups = [
		{
			group: "guides",
			routes: [
				{ name: 'Usage', status: 'warning' },
				{ name: 'Themes', status: '' },
				{ name: 'Typography', status: '' },
			]
		},
		{
			group: 'styles',
			routes: [
				{ name: 'Alert', status: '' },
				{ name: 'Badge', status: '' },
				{ name: 'Button', status: '' },
				{ name: 'Card', status: '' },
				{ name: 'Divider', status: '' },
				{ name: 'Drawer', status: 'updated' },
				{ name: 'Dropdown', status: '' },
				{ name: 'Input', status: '' },
				{ name: 'Menu', status: '' },
				{ name: 'Navbar', status: '' },
				{ name: 'Switch', status: '' },
				{ name: 'Workbench', status: '' },
			]
		},
		{
			group: 'components',
			routes: [
				{ name: 'AppShell', status: '' },
				{ name: 'CodeBlock', status: '' },
				{ name: 'CodePreview', status: '' },
				{ name: 'TableOfContents', status: '' },
			]
		},
		{
			group: "actions",
			routes: [
				{ name: "Clipboard", status: "" }
			]
		},
		{
			group: "utilities",
			routes: [
				{ name: "Storage", status: "updated" }
			]
		},
	];
</script>

<nav class="menu menu-drawer-fit">
	<ul>
		{#each groups as g}
			<li>{g.group}</li>
			{#each g.routes as r}
				{@const name = r.name.toLowerCase()}
				{@const path = `/${g.group}/${name}`}
				<li>
					<a class="flex justify-between" href="/{g.group}/{name}" data-active={$page.url.pathname === path}>
						{r.name}
						{#if r.status}
						{@const color = r.status === "error" ? "error" : (r.status === "warning" ? "warning" : "success")}
							<span class="badge badge-{color} ml-2">{r.status}</span>
						{/if}
					</a>
				</li>
			{/each}
		{/each}
	</ul>
</nav>
