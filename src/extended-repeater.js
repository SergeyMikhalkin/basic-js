const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  let repeatTimes = options['repeatTimes'] === undefined ? 1 : options['repeatTimes'];
  let separator = options['separator'] === undefined ? '+' : options['separator'];
  let addition = options['addition'] === undefined ? '' : options['addition'];
  let additionRepeatTimes = options['additionRepeatTimes'] === undefined ? 1 : options['additionRepeatTimes'];
  let additionSeparator =  options['additionSeparator'] === undefined ? '|' : options['additionSeparator'];


  for(let i = 0; i < repeatTimes; i++) {
    let subStr = str;
    for(let j = 0; j < additionRepeatTimes; j++)
    {
      if(j < additionRepeatTimes - 1) subStr += addition + additionSeparator;
      else subStr += addition;
    }
    if(i < repeatTimes - 1) result += subStr + separator;
    else result += subStr;
  }

  return result;
}

module.exports = {
  repeater
};
