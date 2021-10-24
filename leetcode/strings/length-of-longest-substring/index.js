/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  if (!s) return 0;

  const chars = s.split("")
  let longestString = ""
  let size = 0;

  chars.forEach(char => {
    const index = longestString.lastIndexOf(char)

    longestString = (index === -1) ? longestString += char : longestString.substr(index + 1) + char
    size = Math.max(longestString.length, size)
  })

  return size
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring(""))
