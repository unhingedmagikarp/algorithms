/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
  let start = 0;
  let end = s.length - 1;

  while (end > start) {
    const temp = s[start]
    s[start++] = s[end]
    s[end--] = temp
  }

  return s
};

console.log(reverseString(["h", "e", "l", "l", "o"]))
// Output: ["o","l","l","e","h"]