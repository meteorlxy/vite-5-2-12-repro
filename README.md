# Vite 5.2.12 Regression Reproduction

## Install

```sh
pnpm install
```

## Reproduction

```sh
pnpm build
```

Check the dist folder:

```
5.2.11/dist
├── assets
│   ├── style-DPbjpXsc.css
│   └── style-l0sNRNKZ.mjs
└── index.mjs
```

```
5.2.12/dist
├── assets
│   └── style-DPbjpXsc.css
└── index.mjs
```

The `style-l0sNRNKZ.mjs` file is removed in the 5.2.12 build, but it's still referenced in the `index.mjs` file.

```mjs
const index = async () => {
  await import("./assets/style-l0sNRNKZ.mjs"); // <- This file is removed in 5.2.12, which will cause ERR_MODULE_NOT_FOUND during SSR
};
export {
  index as default
};
```
