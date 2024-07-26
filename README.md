# Slowreader extension

## Tooling

- React + Vite
- [Typescript](https://github.com/hplush/slowreader/blob/main/tsconfig.json)
- Linters: [Prettier](https://github.com/hplush/slowreader/blob/main/.prettierrc), [ESLint](https://github.com/hplush/slowreader/blob/main/eslint.config.js)

## Scripts

- `pnpm install` to install dependencies
- `pnpm dev` to run the plugin in development mode
- `pnpm build` to build the plugin for production
- `pnpm lint` to run linters

## Quickstart

- Run `pnpm install` to install dependencies
- Run `pnpm dev` to build the extension and watch the changes
- Open `chrome://extensions/` -> `Load unpacked` and choose `dist` folder from this repo

During the development process, there is no need to remove the extension and re-upload it. You can just re-build the extension by running `pnpm dev` and then click on the update button at the right bottom of the extension's block.

You can see the console for errors and logs by clicking on the link at the line `Inspect views: service worker` in the plugin's block.
