# Turbo Prisma Shadcn Starter

A starter template combining Next.js, Express.js, Tailwind CSS, and Shadcn UI, optimized with TurboRepo for monorepo management.

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app
- `api`: an [Express](https://expressjs.com/) server
- `@repo/ui`: UI library with [ShadCN](https://ui.shadcn.com/) Components
- `@repo/db`: [Prisma](https://www.prisma.io/) ORM
- `@repo/logger`: isomorphic logger (a small wrapper around console.log)
- `@repo/config-eslint`: ESLint configurations used throughout the monorepo
- `@repo/config-tailwind`: Tailwind configurations used throughout the monorepo
- `@repo/config-typescript`: tsconfig.json's used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Usage

### Clone Repo

```
git clone https://github.com/gh0sty02/turbo-prisma-shadcn-starter.git
```

### Install Dependencies

```
npm install
```

### Start Dev Server

```
turbo dev
```

### To Add Components

Navigate to the `ui` package and run the following command to add a new component:

```
cd packages/ui
npm run ui:add <component>
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
