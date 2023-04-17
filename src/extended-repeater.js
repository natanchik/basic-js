const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 */
function repeater(str, options) {
  let repeatTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1;
  let separator = options.hasOwnProperty('separator') ? options.separator : "+";
  let addition = options.hasOwnProperty('addition') ? String(options.addition) : "";
  let additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;
  let additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : "|";  
  
  let addArray = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  console.log(addArray);
  let text = String(str) + addArray;
  console.log(text);
  let textArray =  Array(repeatTimes).fill(text).join(separator); 
  
  return textArray;
}

module.exports = {
  repeater
};
