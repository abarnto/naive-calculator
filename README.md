# Naive Calculator

A naive package exposing very basic math operations.

## Disclaimer

Obviously, this package is not intended for usage! Stick with JS for this kind of stuff LOL.

It's just personal training on some basic stuff, like:
- setup an NPM module
- execute commands via CLI
- practice with [node-tap](https://github.com/tapjs/node-tap)

---

## Setup

```sh
npm install naive-calculator
```

or

```sh
yarn add naive-calculator
```
## Usage
### In another JS project


```js
const calculator = require("naive-calculator");
// ...
const sum = calculator.sum(1, 2, 3);
const difference = calculator.substract(1, 2, 3);
const product = calculator.multiply(1, 2, 3);
const { quotient, remainder } = calculator.divide(10, 3);
```
### Via CLI
```sh
yarn calculate [sum |  substraction |  multiply |  divide] 1 2 3
```

## Tests

Run all tests with:

```sh
yarn test
```

For *coverage report* run:

```sh
yarn test --coverage-report=html
```
