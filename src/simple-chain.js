const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length();
  },
  addLink(item) {
    if(item == undefined && item != null) this.arr.push(' ');
    else this.arr.push(item);
    return this;
  },
  removeLink(index) {
    if(index == undefined) { 
      this.arr = [];
      throw Error('You can\'t remove incorrect link!');
    }
    if(typeof (index) != 'number') {
      this.arr = [];
      throw Error('You can\'t remove incorrect link!');
    }
    if(this.arr.length <= index - 1) { 
      this.arr = [];
      throw Error('You can\'t remove incorrect link!');
    }
    if(index - 1 < 0) {
      this.arr = [];
      throw Error('You can\'t remove incorrect link!');
    }
    this.arr.splice(index - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = '( ';
    for(let i = 0; i < this.arr.length - 1; i++) {
      str += this.arr[i] + ' )~~( ';
    }
    str += this.arr[this.arr.length - 1] + ' )';

    this.arr = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
