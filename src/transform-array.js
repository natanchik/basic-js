const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  if (!Array.isArray(array)) {
    throw new SyntaxError("'arr' parameter must be an instance of the Array!");
  };
  let arr = array.slice(0);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      i !== arr.length-1 ? arr.splice(i, 2) : arr.splice(i, 1);
    } else if (arr[i] === "--discard-prev") {
      i !== 0 ? arr.splice(i-1, 2) : arr.splice(i, 1);
    } else if (arr[i] === "--double-next") {
      i !== arr.length-1 ? arr.splice(i, 1, arr[i+1]) : arr.splice(i, 1);
    } else if (arr[i] === "--double-prev") {
      (i !== 0 && arr[i-1]) ? arr.splice(i, 1, arr[i-1]) : arr.splice(i, 1);
    };
    console.log(arr);
  };
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "--discard-next" || arr[i] === "--discard-prev" || arr[i] === "--double-next" || arr[i] === "--double-prev") {
          arr.splice(i, 1);
      }
  }
  return arr;
}

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


module.exports = {
  transform
};
