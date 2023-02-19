<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	export let target = '#app-page main';
	export let headings = 'h2';
  export let label = "On this page";

  let page: HTMLElement | null = null;
  let filleredHeadings: HTMLElement[] = [];

  let active: HTMLElement | null = null;
  let set = new Set<Element>();

  let observer: IntersectionObserver | null = null;

	function scrollTo(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth" });
  }

  function callback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    let closest: Element | undefined;

    // remember who are intersecting.
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        set.add(entry.target);
      } else {
        set.delete(entry.target);
      }
    });  

    // find the closest element to the top.
    set.forEach(function(entry) {
      if (!closest || closest.getBoundingClientRect().top > entry.getBoundingClientRect().top) {
        closest = entry;
      }
    });

    // update the active one.
    active = closest as HTMLElement;  
  }

	onMount(function () {
    observer = new IntersectionObserver(callback, {
      threshold: 1.0,
    });

    page = document.querySelector(target);
    page?.querySelectorAll(headings)?.forEach(function(el) {
      if (!el.id) {
        el.id = el.innerHTML.replaceAll(' ', '-');
      }
      filleredHeadings.push(el as HTMLElement);
      observer?.observe(el);
    });
    filleredHeadings = [...filleredHeadings];
	});

	onDestroy(function () {
    observer?.disconnect();
  });
</script>

<h3 class="text-lg font-semibold px-7 mb-2">{label}</h3>
<nav class="menu menu-compact">
	<ul>
		{#each filleredHeadings as el}
			<li>
				<span class="cursor-pointer" data-active={active === el} on:click={() => { scrollTo(el); }} on:keypress>
					{el.innerText.replace("# ", "")}
        </span>
			</li>
		{/each}
	</ul>
</nav>
