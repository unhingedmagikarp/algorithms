/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

function reverseString(s) {
  let left = 0;
  let right = s.length - 1;
  let curr;

  while (left < right) {
    curr = s[left];
    s[left++] = s[right];
    s[right--] = curr;
  }

  return s;
}
