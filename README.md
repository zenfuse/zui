# ZUI

Repository with current components used in the website and dashboard project

## Start project

```
npm install
npm run storybook
```

## Import and export Bit components

[Install](https://docs.bit.dev/docs/installation) bit localy

```
npm install bit-bin --global
## or
brew install bit
```

Login to bit

```
 bit login
```

Import components from bit. You need to be added to contributiors of the [repo](https://bit.dev/nightcoder/zui) or repo should be public

```
npm i @bit/nightcoder.zui.src.components.ui.p
```

Push updates to bit

```
bit import bit.envs/compilers/react --compiler
bit add src/components/ui/p --id src/components/ui/p
bit tag src/components/ui/p 0.0.3 # version from bit + 0.0.1
bit export nightcoder.zui
```
