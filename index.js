function convertArgumentsToArray(args) {
  return Object.keys(args).map((k) => args[k]);
}

exports.sum = function () {
  const args = convertArgumentsToArray(arguments);
  return args.filter((arg) => typeof arg === "number").reduce((sum, num) => (sum += num), 0);
};

exports.substraction = function () {
  const args = convertArgumentsToArray(arguments);
  const numbers = args.filter((arg) => typeof arg === "number");
  const firstNum = numbers.splice(0, 1);
  return numbers.reduce((sub, num) => (sub -= num), firstNum);
};

exports.multiply = function () {
  const args = convertArgumentsToArray(arguments);
  return args.filter((arg) => typeof arg === "number").reduce((mul, num) => (mul *= num), 1);
};

exports.divide = (dividend, divider) => {
  if (typeof dividend !== "number" || typeof divider !== "number") {
    throw new Error("You must provide 2 numbers as dividend & divider!");
  }
  const quotient = Math.floor(dividend / divider);
  const remainder = dividend % divider;
  return {
    quotient,
    remainder,
  };
};
