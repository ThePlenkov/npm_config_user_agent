# which-engine/which-pm CLI

This is an alternative implementation to another [which-pm](https://www.npmjs.com/package/which-pm) project

## Usage

### In the console

which-pm shows the actual package manager to be used

```
npx which-pm
npm

yarn exec which-pm --silent
yarn

pnpm exec which-pm
pnpm

bun run which-pm
bun
```

please notice that when node or deno is used to run the code directly, it will not be possible to detrmine what is the actual package manager used.
I mean of course it stil possible to determine what was the PM used for installation but it's not same as the actual engine/pm which was used to run the file/command
For that case `which-engine` command can be used
```
node --import tsx which-engine
node

## bun still keeping engine node
bun run ./which-engine
node

deno run --allow-env --unstable-sloppy-imports ./which-engine
deno
```

where `which-engine` is ts file:
```
#!/usr/bin/env -S node --import tsx
import user_agent from '../src/lib/npm-config-user-agent';
console.log(user_agent.engine);
```

### Programmatically as API

```
import user_agent from "./npm-config-user-agent"
console.log(user_agent);
```

prints something like this
```
{
  pm: 'npm',
  pm_version: '10.8.2',
  engine: 'node',
  engine_version: 'v20.17.0',
  platform: 'linux',
  arch: 'x64',
  workspaces: false,
  ci: undefined
}
```
