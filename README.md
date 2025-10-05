## Required Dependencies
- [Node](https://nodejs.org/en) (v20.15.0 recommended)
- [git](https://git-scm.com/downloads)
- [pnpm](https://pnpm.io/installation) (v8.5.1 recommended)
  - usually node comes with npm, if so, use `npm install pnpm`
  
## Steps to setup
- Clone this repository using <br>`git clone https://github.com/Nisarg851/HumberChatbot.git`
- Move into project folder
- run `pnpm install` to install all the required dependencies.
- run `pnpm run dev` to run the application in developer mode.
  
<br>

> ***Note:** At this point the project should be ready, below information is only for exploration (provided by Vite) and isn't necessary for project setup!*

## React + TypeScript + Vite 
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
