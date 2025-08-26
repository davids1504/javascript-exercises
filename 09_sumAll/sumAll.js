const sumAll = function (a, b) {
  if (a < 0 || b < 0) return "ERROR";
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }
  let higher = b;
  let lower = a;

  if (a > b) {
    higher = a;
    lower = b;
  }

  let sum = lower;
  for (let i = lower + 1; i <= higher; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
