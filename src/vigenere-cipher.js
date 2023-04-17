const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description * 
 * @example * 
 * const directMachine = new VigenereCipheringMachine(); 
 * const reverseMachine = new VigenereCipheringMachine(false); 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!' 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!' 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA' 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA' 
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type === false ? 'reverseMachine' : 'directMachine';
  };

  crypt(text, key, dest) {    
    text = text.toUpperCase();
    key = key.toUpperCase();

    let keys = ""
    while (keys.length < text.length) {
      keys += key;
    };

    
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";       
    let arrLetters = [];    
    for (let s of text) {
      if (letters.includes(s)) {
        arrLetters.push(letters.indexOf(s));
      } else {
        arrLetters.push(s);         
      }      
    };

    let arrKeys = [];
    for (let s of keys) {
      arrKeys.push(letters.indexOf(s));
    };

    let arrTotal = [];
    let num;
    let dif = 0;
    if (dest === 'encrypt') {
      for (let i = 0; i < text.length; i++) {
        if (typeof arrLetters[i] === 'number' && arrLetters[i] < 26) {
          num = arrLetters[i] + arrKeys[i - dif];
          arrTotal.push(num > 25 ? num % 26 : num);
        } else {
          arrTotal.push(arrLetters[i]);
          dif += 1;
        }  
      }
    } else {
      for (let i = 0; i < text.length; i++) {
        if (typeof arrLetters[i] === 'number' && arrLetters[i] < 26) {
          num = arrLetters[i] - arrKeys[i - dif];
          arrTotal.push(num < 0 ? num + 26 : num);
        } else {
          arrTotal.push(arrLetters[i]);
          dif += 1;
        }  
      }
    }



    let total = "";
    for (let ind of arrTotal) {      
      if (typeof ind === 'number' && ind < 26) {
        total += letters[ind];
      } else {
        total += ind;
      }
    }
    return total;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    };
    message = this.crypt(message, key, 'encrypt');
    return message = this.type === 'directMachine' ? message : message.split("").reverse().join(""); 
    
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  decrypt(encryptedMessage , key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    };
    encryptedMessage = this.crypt(encryptedMessage, key);
    return encryptedMessage = this.type === 'directMachine' ? encryptedMessage : encryptedMessage.split("").reverse().join(""); 
    
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
