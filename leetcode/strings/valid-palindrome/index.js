/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  const sanitized = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  return sanitized === sanitized.split("").reverse().join("");
};
