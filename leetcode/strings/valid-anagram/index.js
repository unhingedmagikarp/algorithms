/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Solution based on hashmap
function isAnagram(s, t) {
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

// One liner using built in functions only
function isAnagram(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
}

// Solution using the original string and chipping away common characters
function isAnagram(s, t) {
  while (s.length && s.indexOf(t[s.length - 1]) !== -1) {
    if (s.length === 0) return false;

    s = s.replace(t[s.length - 1], "");
  }

  return s.length === 0;
}
