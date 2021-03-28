/**
 * @param {string} s
 * @return {number}
 */

/**
 * Solution 1
 * Double for-loop approach
 */
// function firstUniqChar(s) {
//   let hash = {};
//   for (let i = 0; i < s.length; i++) {
//     hash[s[i]] === undefined ? (hash[s[i]] = true) : (hash[s[i]] = false);
//   }

//   for (let i = 0; i < s.length; i++) {
//     if (hash[s[i]] == true) {
//       return i;
//     }
//   }

//   return -1;
// }

/**
 * Solution 1
 * Single for-loop approach
 */
function firstUniqChar(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
      return i;
    }
  }

  return -1;
}
