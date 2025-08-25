const repeatString = function (str, multiplier) {
  if (multiplier < 0) return "ERROR";
  let result = "";
  for (let i = 0; i < multiplier; i++) {
    result += str;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
