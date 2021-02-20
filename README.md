# Proof of Concept with a Movie API

This project is an architecture proof of concept with a movie API.

## How to Use this repo

```
yarn install
yarn lerna bootstrap
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
