<script>
	import Shell from '$docs/Shell.svelte';

	const settings = {
		name: 'Menu',
		description: 'Menus list items, mainly used as navigators.',
		examples: [
			{
				title: 'Menu',
				description: '',
				code: `<nav class="menu">
  <ul>
    <li><a href="/install">Install</a></li>
    <li><a href="/themes">Themes</a></li>
    <li><a href="/typography">Typography</a></li>
  </ul>
</nav>`
			},
			{
				title: 'Menu with a title',
				description: '',
				code: `<nav class="menu">
  <ul>
    <li>Guildes</li>
    <li><a href="/install">Install</a></li>
    <li><a href="/themes">Themes</a></li>
    <li><a href="/typography">Typography</a></li>
  </ul>
</nav>`
			},
			{
				title: 'Menu with icons',
				description: 'Text shows up only on screen size greater than 1024px.',
				code: `<nav class="menu">
  <ul>
    <li>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5c0 .12.05.23.13.33c.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4c0-3.86-3.59-7-8-7z"/><circle cx="6.5" cy="11.5" r="1.5" fill="currentColor"/><circle cx="9.5" cy="7.5" r="1.5" fill="currentColor"/><circle cx="14.5" cy="7.5" r="1.5" fill="currentColor"/><circle cx="17.5" cy="11.5" r="1.5" fill="currentColor"/></svg>
        <span>Themes</span>
      </a>
    </li>
    <li>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.5 20q-.625 0-1.062-.438Q7 19.125 7 18.5V7H3.5q-.625 0-1.062-.438Q2 6.125 2 5.5t.438-1.062Q2.875 4 3.5 4h10q.625 0 1.062.438Q15 4.875 15 5.5t-.438 1.062Q14.125 7 13.5 7H10v11.5q0 .625-.438 1.062Q9.125 20 8.5 20Zm9 0q-.625 0-1.062-.438Q16 19.125 16 18.5V12h-1.5q-.625 0-1.062-.438Q13 11.125 13 10.5t.438-1.062Q13.875 9 14.5 9h6q.625 0 1.062.438Q22 9.875 22 10.5t-.438 1.062Q21.125 12 20.5 12H19v6.5q0 .625-.438 1.062Q18.125 20 17.5 20Z"/></svg>
        <span>Typography</span>
      </a>
    </li>
  </ul>
</nav>`
			},
		]
	};
</script>

<Shell {settings} />
