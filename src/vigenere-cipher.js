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
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    };
    
    return message = this.type === 'directMachine' ? message.toUpperCase() : message.toUpperCase().split("").reverse().join(""); 
    
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  decrypt(encryptedMessage , key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    };
    return encryptedMessage = this.type === 'directMachine' ? encryptedMessage.toUpperCase() : encryptedMessage.toUpperCase().split("").reverse().join(""); 
    
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
