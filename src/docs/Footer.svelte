<script>
	import Icon from "./Icon.svelte";

</script>

<div class="flex flex-wrap gap-4 py-8">
  <nav class="menu menu-static menu-compact">
    <ul>
      <li>Source Code</li>
      <li>
        <a href="//github.com/xoolab/ui" target="_blank" rel="noreferrer">
          <Icon id="github-fill" />
          GitHub
        </a>
      </li>
    </ul>
  </nav>
  <nav class="menu menu-static menu-compact">
    <ul>
      <li>Community</li>
      <li>
        <a href="//qm.qq.com/cgi-bin/qm/qr?k=hPxbUGbZL3Ii7MMNOgp994n5DXl2ijFH&jump_from=webapi&authKey=XST5fGXGyQjKPccGnWmQeJ9Yj1ltEfGSZz8Vo1et9x6Lyx0yczlHIIYqdp2SgKnK" target="_blank" rel="noreferrer">
          <Icon id="qq-fill" />
          972606439
        </a>
      </li>
      <li>
        <a href="/">
          <Icon id="mastodon-fill" />
          Mastodon
        </a>
      </li>
    </ul>
  </nav>
</div>