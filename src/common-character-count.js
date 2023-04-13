const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(str1, str2) {
    let count = 0;
    const set1 = new Set(str1);
    for (let s of set1) {
        if (str2.includes(s)) {
          let regex = new RegExp(s, "gi");
          count += Math.min((str1.match(regex) || []).length, (str2.match(regex) || []).length);
        }
    }
    return count
}

module.exports = {
  getCommonCharacterCount
};
