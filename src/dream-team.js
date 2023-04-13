const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {  
  if (!members || !(Array.isArray(members))) {
    return false
  } else {
    members = members.filter(memb => typeof(memb) === "string").map(s => s.trim().toUpperCase()).sort(); 
    if (!members) {
      return false
    } else {
      return members.reduce((team, memb) => team += memb[0], ""); 
    }         
  }
}

module.exports = {
  createDreamTeam
};
