const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct
  }

  encrypt(text, key) {
    if(text == undefined || key == undefined) throw Error('Incorrect arguments!');
    let ciphertext = '';
    key = this.addRepeats(key, text.replace(' ', '').length - key.length);
    let keyIndex = 0;
    for(let i = 0; i < text.length; i++) {
      if('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(text[i]) == false) {
        ciphertext += text[i];
        continue;
      }
      let M = text[i].toLowerCase().charCodeAt(0) - 97;
      let K = key[keyIndex].toLowerCase().charCodeAt(0) - 97;
      let C = (M + K) % 26;
      ciphertext += String.fromCharCode(97 + C);
      keyIndex++;
    }
    return this.direct ? ciphertext.toUpperCase() : ciphertext.toUpperCase().split('').reverse().join('');
  }
  decrypt(ciphertext, key) {
    if(ciphertext == undefined || key == undefined) throw Error('Incorrect arguments!');
    let text = '';
    key = this.addRepeats(key, ciphertext.replace(' ', '').length - key.length);
    let keyIndex = 0;
    for(let i = 0; i < ciphertext.length; i++) {
      if('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(ciphertext[i]) == false) {
        text += ciphertext[i];
        continue;
      }
      let C = ciphertext[i].toLowerCase().charCodeAt(0);
      let K = key[keyIndex].toLowerCase().charCodeAt(0);
      let M = (C - K + 26) % 26;
      text += String.fromCharCode(97 + M);
      keyIndex++;
    }

    return this.direct ? text.toUpperCase() : text.toUpperCase().split('').reverse().join('');
  }

  addRepeats(key, diff) {
    let fullKey = '';
    let k = 0;
    for (let i = 0; i < key.length + diff; i++) {
      fullKey += key[k];
      if(k == key.length - 1) k = 0;
      else k++;
    }
    return fullKey;
  }
}

module.exports = {
  VigenereCipheringMachine
};
