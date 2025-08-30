const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, val) => {
    return sum + val;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, val) => {
    return acc * val;
  });
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num === 0) return 1;

  let result = num;
  for (let i = num - 1; i >= 1; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
