const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
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
  constructor() { 
    this.count = 0; 
  };
  calculateDepth(arrays) { 
    throw new NotImplementedError('Not implemented');
    /*
    ++this.count;
    if (!arrays) {
      return this.count;
    };    
    for (let array of arrays) {
      if (Array.isArray(array)) {
      return super.calculateDepth(array);
      };
    };*/
    return this.count;    
  }
}

module.exports = {
  DepthCalculator
};
