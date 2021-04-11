# lucasleandro.dev

> Source code of my stuff

## Setup

For running my stuff you're going to need [Node](https://nodejs.org/) and [PNPM](https://pnpm.js.org/en/cli/add).
You can install Node using `nvm` or `fnm`.

```sh
$ nvm install 14
```

Once you have it running locally, you can proceed to running:

```sh
$ pnpm install
$ pnpm bootstrap
```

## Example commands

### Running the dev command in certain packages

```sh
$ pnpm dev --filter @teamwork/ui-kit --filter @teamwork/ui-tailwind-config
```

Package                                | Description
---                                    | ---
`@teamwork/component-generator`        | `(TODO)`
