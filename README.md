# Monorepo Playground

A playground to test different monorepo approaches.

## Tools

This repo uses the following tools to manage the monorepo:

- [Lerna](https://github.com/lerna)
- [Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces)

Check out the [useful links section](#useful-links).

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

### Peer dependencies

Lerna doesn't manage peer dependencies, so they should be handled manually.

### Commits

This repo follows the [conventional commits](https://www.conventionalcommits.org/) specification.<br>
It allow us to:

- automatically generating CHANGELOGs and release notes
- automatically determining a semantic version bump
- have a better structured commit history

To create a new commit, run:

```sh
yarn commit
```

### Running tasks

To run a task for every package in the monorepo (e.g., test, lint), run the corresponding script defined in the root `package.json` file:

```sh
yarn test
```

If you need to execute a task in a specific package, move to that package and run the script.

### Publishing

Since we are using [conventional commits](https://www.conventionalcommits.org/) (check the [commits section](#commits)), the package version will be bumped based on this information.

To release a new version, run:

```sh
yarn release
```

Also every CHANGELOG file will be updated along with the corresponding release notes.<br>
**You will need to set the `GH_TOKEN` environment variable with a Github authentication token** to allow the automatic publication of release notes. Check [this link](https://github.com/lerna/lerna/tree/master/commands/version#--create-release-type) to learn more about this.

### Prerelease

Run this command to release a `beta` version:

```sh
yarn release:beta
```

The dist-tag for the npm package will be `beta`, and a coresponding tag will be set in the new commit.

### Graduate

Graduating a package means bumping to the non-prerelease variant of a prerelease version, eg. `package-1@1.0.0-alpha.0 => package-1@1.0.0`.

To graduate prerelease versions, run:

```sh
yarn graduate
```

The graduation will be done based on the information provided by conventional commits.

Check [this link](https://github.com/lerna/lerna/tree/master/commands/version#--conventional-graduate) to learn more about graduating packages with conventional commits.

## Useful links

- [Lerna](https://github.com/lerna)
- [Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)
- [Hoisting in Yarn workspaces](https://yarnpkg.com/blog/2018/02/15/nohoist/)
