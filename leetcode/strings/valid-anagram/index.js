/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Anagram
function isAnagram(s = "anagram", t = "nagaram") {
  if (s.length !== t.length) return false;

  if (s === t) return true;

  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1);
  }

  for (let j = 0; j < t.length; j++) {
    if (map.has(t[j]) && map.get(t[j]) - 1 >= 0) {
      map.set(t[j], map.get(t[j]) - 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(isAnagram());
