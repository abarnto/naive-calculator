# Naive Calculator

A naive package exposing very basic math operations.

## Setup

```sh
npm install naive-calculator
```

or

```sh
yarn add naive-calculator
```
## Usage

```js
const calculator = require("naive-calculator");
// ...
const sum = calculator.sum(1, 2, 3);
const difference = calculator.substraction(1, 2, 3);
const product = calculator.multiply(1, 2, 3);
const { quotient, remainder } = calculator.divide(10, 3);
```
