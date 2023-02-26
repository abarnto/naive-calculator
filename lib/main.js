/**
 * Get numbers from arguments
 * @param {object} args 
 * @returns {number[]}
 */
function getNumbers(args) {
  return Object.keys(args)
    .map((k) => args[k])
    .map(arg => Number.parseFloat(arg))
    .filter((arg) => !Number.isNaN(arg));
}

exports.sum = function () {
  const numbers = getNumbers(arguments);
  return numbers.reduce((sum, num) => (sum += num), 0);
};

exports.substract = function () {
  const numbers = getNumbers(arguments);
  const firstNum = numbers.splice(0, 1);
  return numbers.reduce((sub, num) => (sub -= num), firstNum);
};

exports.multiply = function () {
  const numbers = getNumbers(arguments);
  return numbers.reduce((mul, num) => (mul *= num), 1);
};

exports.divide = (dividend, divider) => {
  dividend = Number.parseFloat(dividend);
  divider = Number.parseFloat(divider);
  if (Number.isNaN(dividend) || Number.isNaN(divider)) {
    throw new Error("You must provide 2 numbers as dividend & divider!");
  }
  const quotient = Math.floor(dividend / divider);
  const remainder = dividend % divider;
  return {
    quotient,
    remainder,
  };
};
