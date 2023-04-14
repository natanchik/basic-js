const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  //count = 0;
  calculateDepth(arrays) { 
    throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here   
    /*
    ++count;
    if (!arrays) {
      return count;
    };    
    for (let array of arrays) {
      if (Array.isArray(array)) {
      return calculateDepth(array);
      }
    }
    return count
    */
  }
}

module.exports = {
  DepthCalculator
};
