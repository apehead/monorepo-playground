# Monorepo Playground

A playground to test different monorepo approaches.

## Tools

- [Lerna](https://github.com/lerna)
- [Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces)

## Development workflow

### Project initialization

Run the following command to bootstrap the project:

```sh
yarn install
```

### Installing workspace dependencies

Using `-W` instructs Yarn to install the given dependencies at the workspace root.<br>
These dependencies are usually shared between all packages in development (e.g: test framework, build tools).

To install a **development dependency**, run:

```sh
yarn add -DW my-dependecy
```

To install a **dependency**, run:

```sh
yarn add -W my-dependecy
```

### Installing package dependencies

To install a dependency in a specific package, run:

```sh
yarn lerna add @myscope/my-scripts --scope=@myscope/my-tool
```

This command will install `@myscope/my-scripts` in `@myscope/my-tool` as a dependency.

### Commit

Conventional commits

Automated changelog and release notes generation

### Running tasks

Test, Lint, Build, etc

### Publishing

Release

Prerelease

Changelog publication: requirements

CI use `--yes` option
https://github.com/lerna/lerna/tree/master/commands/version#--yes
https://github.com/lerna/lerna/tree/master/commands/publish#--yes

### Yarn workspaces

How Yarn workspaces work

- https://yarnpkg.com/lang/en/docs/workspaces/

How hoisting is managed

- https://yarnpkg.com/blog/2018/02/15/nohoist/
