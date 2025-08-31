const palindromes = function (str) {
  strArr = str.toLowerCase().split("");
  reducedArr = strArr.filter((el) => {
    return /^[A-Za-z\d]+$/.test(el);
  });
  let rounds = Math.floor(reducedArr.length / 2);
  for (let i = 0; i < rounds; i++) {
    if (reducedArr[i] !== reducedArr[reducedArr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
