# reconstruct-descriptors

[![Build Status][2]][1]

Deeply reconstruct any object iterating over its property descriptors.

## Install

`reconstruct-descriptors` is published on NPM Registry, so you can install it using any node package manager.

```sh
npm install reconstruct-descriptors

# If you're using Yarn.
yarn add reconstruct-descriptors
```

## Usage

This module exports a function that receives an object and a function to iterate over property descriptors.

```js
import reconstruct from 'reconstruct-descriptors'

const immutable = (object) => reconstruct(object, (descriptor, property) => ({
  [property]: {
    ...descriptor,
    writable: false,
    configurable: false
  }
}))

const user = immutable({ name: 'Ryan' })

user.name = 'Bruno'
console.log(user.name) // 'Ryan'

delete user.name
console.log(user.name) // 'Ryan'
```

## License

Released under MIT license. You can see it [here][0].

<!-- Links -->

[0]: ./LICENSE
[1]: https://travis-ci.org/VitorLuizC/reconstruct-descriptors
[2]: https://travis-ci.org/VitorLuizC/reconstruct-descriptors.svg?branch=master
