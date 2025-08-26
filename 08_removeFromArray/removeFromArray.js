const removeFromArray = function (arr, ...elements) {
  for (let element of elements) {
    let index = arr.findIndex((el) => el === element);
    if (index >= 0) {
      arr.splice(index, 1);
      removeFromArray(arr, ...elements);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
