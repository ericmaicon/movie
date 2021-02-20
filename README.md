# Proof of Concept with a Movie API

This project is an architecture proof of concept with a movie API.

## How to Use this repo

```sh
yarn install
yarn lerna bootstrap
```

### Running Storybook in UI kit

```sh
cd packages/uikit
yarn storybook
```

It will open the (http://localhost:6006)[http://localhost:6006] page with all components.

To build the storybook, you should run:

```sh
yarn build
```

To run tests:

```sh
yarn test
```

## Technologies

### Yarn && Yarn workspace

Yarn Workspaces are a way to set up package architecture.

1. The dependencies can be linked together, which means that your workspaces can depend on one another while always using the most up-to-date code available. This is also a better mechanism than yarn link since it only affects your workspace tree rather than your whole system.

2. All the project dependencies will be installed together, giving Yarn more latitude to better optimize them.

3. Yarn will use a single lockfile rather than a different one for each project, which means fewer conflicts and easier reviews.

### Typescript

TypeScript is a language which builds on JavaScript, by adding static type definitions. Typescript was chosen because of:

1. Typings
2. Integration with IDE IntelliSense
3. Maintenace

### Lerna

A tool for managing JavaScript projects with multiple packages. This will be more decribed on Monorepo Section.

### Eslint

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

### Prettier

Prettier is an opinionated code formatter that helps the developer saving time by using auto formatter and avoid discuss style in code review.

### Commitizen, Husky, Lint Stage and Commitlint

Tools to create a standard with commit message and run hooks in git.

### Jest

Jest is a JavaScript Testing Framework with a focus on simplicity. This will be more described on Test page.

### Storybook

## Project Structure

The project uses mono repo as a structure to split the logic in 3 packages:

1. uikit
2. core
3. site

### UI kit

This is the package where the generic components is located. This component should be the main component library of the project and where every generic component will be located. No specific logic should be put in here.

### Core

### Site
