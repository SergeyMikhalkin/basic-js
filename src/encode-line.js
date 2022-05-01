const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedLine = '';
  for(let i = 0; i < str.length; i++) {
    let repeted = 1;
    for(let j = i + 1; j < str.length; j++) {
      if(str[i] == str[j]) repeted++;
      else break;
    }
    if(repeted > 1) encodedLine += repeted + str[i];
    else encodedLine += str[i];
    i += repeted - 1;
  }
  return encodedLine;
}

module.exports = {
  encodeLine
};
