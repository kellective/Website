# Website

All data related to our website

## Developing

1. Check out this repo
2. Run `yarn`
3. Run `yarn start`

## Development practices

* All components and code are written in TypeScript
* All components which have styles are in a folder where the component is index.tsx, and the styles are styles.module.css. Example in `src/components/layout/header`
* Access to external state like the Auth system, or the network (instead of using fetch() directly), are done through the Services interface. All pages have access to the Services interface by inheriting from the `Page` component in `src/components/page.tsx`, through the protected method `getServices()`. Every page is responsible for passing down these services to the subcomponents that need them. (Explicit is better than implicit, so no React Contexts are used.) Temporary example in `src/pages/home`
* Shared colors in CSS are stored in variables. Colors used throughout the website are found in `styles/globals.module.css`, which you can explicitly import when you need it. Temporary example in `src/components/layout/header/styles.module.css`

TODO:
* What about CSS mixins?
