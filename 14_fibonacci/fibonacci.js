const fibonacci = function (num) {
  if (+num === 0) return 0;
  if (+num === 1) return 1;
  if (+num === 2) return 1;
  if (+num < 0) return "OOPS";
  let a = 1;
  let b = 1;
  let c;
  for (let i = 2; i < num; i++) {
    c = b;
    b += a;
    a = c;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
