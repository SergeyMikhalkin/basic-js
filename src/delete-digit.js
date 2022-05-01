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
  /*let nStr = n.toString();
  let min = Number(nStr[0] + nStr[1])
  for(let i = 1; i < nStr.length - 2; i++) {

  }
  return */

  let arr = [];
  let nStr = n.toString();
  for(let i = 0; i < nStr.length; i++) {
    let fooArr = nStr.split('');
    fooArr.splice(i, 1);
    fooArr = fooArr.join('');
    arr.push(fooArr);
  }
  arr.sort((a, b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
  });

  return Number(arr[arr.length - 1]);
}

module.exports = {
  deleteDigit
};
