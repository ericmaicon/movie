# Proof of Concept with a Movie API

This project is an architecture proof of concept with a movie API.

[![codecov](https://codecov.io/gh/ericmaicon/movie/branch/master/graph/badge.svg?token=3ILU47P6E8)](https://codecov.io/gh/ericmaicon/movie)

Live: [https://movie-sand.vercel.app/](https://movie-sand.vercel.app/)

## How to Use this repo

The follow commands is essential to get everything working. First step is install all dependencies. Second, it is needed to setup the link between all packages using lerna. To do so, it is needed to run bootstrap command. After that, each package needs to be compiled.

```sh
yarn install
yarn bootstrap
yarn build
```

### Running Storybook in UI kit

```sh
cd packages/uikit
yarn storybook
```

It will open the [http://localhost:6006](http://localhost:6006) page with all components.

### Running Development environment

```sh
cd packages/site
cp .env.example .env
yarn start
```

**ATTENTION:** you need to fill `API_KEY` in .env with your API_KEY otherwise the api won't run.

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

Storybook is a tool for developing UI components in isolation for React. It makes building stunning UIs organized and efficient.

### Styled Components

Styled Components is a performant and flexible CSS-in-JS library. Building on many other CSS-in-JS libraries, it allows you to style apps quickly with string or object styles. It has predictable composition to avoid specificity issues with CSS.

### Create React App

A React app boilerplate from Facebook to create a react app without much pain.

## Project Structure

The project uses mono repo as a structure to split the logic in 3 packages:

1. uikit
2. core
3. site

### UI kit

This is the package where the generic components is located. This component should be the main component library of the project and where every generic component will be located. No specific logic should be put in here.

You can check every component created here using [Storybook](https://storybook.js.org/) as mentioned in `Running Storybook in UI kit` section.

To build this package, you can run the following commands:

```sh
cd packages/uikit
yarn build
```

To test:

```sh
cd packages/uikit
yarn test
```

### Core

Core is the package responsible for integrate with API and any other logic JS only.

You can run tests and build it.

To build this package, you can run the following commands:

```sh
cd packages/core
yarn build
```

To test:

```sh
cd packages/core
yarn test
```

### Site

This is the package responsible for the application itself. Here we have the router configuration, theme injection, core integration with uikit components and so on.

You can check the site in development mode using the commands listed in `Running Development environment` section.

# TODO

1. Because of `display: grid`, this code supports only IE 16+
2. Release commands
3. Cypress
