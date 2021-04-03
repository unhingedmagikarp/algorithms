/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const rev = parseInt(x.toString().split("").reverse().join(""));

  return rev > Math.pow(2, 31) ? 0 : rev * Math.sign(x);
};
