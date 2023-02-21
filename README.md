![logo](./static/logo.png)


![npm bundle size](https://img.shields.io/bundlephobia/min/@xoolab/ui?logo=npm)
![GitHub issues](https://img.shields.io/github/issues/xoolab/ui)
![license](https://img.shields.io/github/license/xoolab/ui)

A web UI library for Svelte and Tailwind.


[Svelte](https://svelte.dev) + [Tailwind](https://tailwindcss.com) are cool, they fit my vision of what webapp development looks like. XOOUI allows you to write less CSS classes than when just using Tailwind, and use CSS variables for theme customization.

Note that XOOUI is now in the PoC phase, **DON'T** use it in production! 


## Installation

Via `NPM`.

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

Hosted websites for docs and examples (Built with Sveltekit + Tailwind + XOOUI):

- [ui.13y.me](https://ui.13y.me).
- [xooui.pages.dev](https://xooui.pages.dev)

## Feedbacks

- [Discussions](https://github.com/xoolab/ui/discussions)
- [Issues](https://github.com/xoolab/ui/issues)


## Dive in XOOUI

Clone the repository and run the docs site.

```bash
git clone https://github.com/xoolab/ui.git

npm run dev
```
