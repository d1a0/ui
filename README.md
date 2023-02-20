# XOOUI

A web UI library using Svelte and Tailwind.


[Svelte](https://svelte.dev) + [Tailwind](https://tailwindcss.com) are cool, they fit my vision of what webapp development looks like. XOOUI allows you to write less CSS classes than just using Tailwind and use CSS variables for theme customization.

## Installation

```bash
npm i @xoolab/ui
```

## Configuration

Add the XOOUI plugin into `tailwind.config.cjs`.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require("@xoolab/ui/tailwind/index.cjs"),
  ],
}
```

## Documentation

Check out [xooui.pages.dev](https://xooui.pages.dev).

## LICENSE

XOOUI is MIT licensed.