<div class="grid grid-cols-[1fr_auto]">
  <main class="overflow-x-auto">
    <slot name="header" />
    <slot />
  </main>
  <aside class="w-64 ml-8 hidden xl:block">
    <slot name="sidebar" />
  </aside>
</div>