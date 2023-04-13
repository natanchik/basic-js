const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = String(n);
  for (i = 0; i < n.length; i++) {
    if (n[i] !== n[i+1]) {
      let ind = n.indexOf(String(Math.min(n[i], n[i+1])));
      return Number(n.slice(0, ind) + n.slice(ind+1));      
    }
  }
  return Number(n.slice(1));      
}

module.exports = {
  deleteDigit
};
