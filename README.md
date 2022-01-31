# Nx Vite Example

This project was generated using [Nx](https://nx.dev) and [@nxext/react](https://nxext.dev/docs/react/overview)

## Steps to get the build working:

- Generate a workspace:

  `npx create-nx-workspace --preset=empty`

- Generate a React + Vite _application_:

  `npx nx g @nxext/react:app libeoweb`

- Generate a React + Vite _library_:

  `npx nx g @nxext/react:lib design-system --appProject libeoweb --buildable true`

  - Use a design system component in the main app

- Generate a React + Vite _component_:

  `npx nx g @nrwl/react:component button --project=design-system`

  - Use the button component in the main app

## How to run the code:

- (Optional): Install nx globally `npm install -g nx`
  - Allows you to do `nx serve` instead of `npx nx serve`
- To run the dev server:
  - `nx serve`
- To build the main app:
  - `nx build libeoweb` (it automatically builds the design system on which it depends)
- To run all tests:
  - `nx run-many --target=test --all`
