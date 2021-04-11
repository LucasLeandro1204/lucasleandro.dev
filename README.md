# lucasleandro.dev

> Source code of my stuff

## Setup

For running my stuff you're going to need [Node](https://nodejs.org/) and [PNPM](https://pnpm.js.org/en/cli/add).
You can install Node using `nvm` or `fnm`.

```sh
$ nvm install 14
$ npm install -g pnpm
```

Once you have it running locally, you can proceed to running:

```sh
$ pnpm install
```

## Example commands

### Running the dev command in certain packages

```sh
$ pnpm dev --filter @l17s/api --filter @l17s/website
```

Package                                | Description
---                                    | ---
`@l17s/website`                        | L17S website
