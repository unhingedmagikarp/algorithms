/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1) {
      digits[i]++;
    }

    if (digits[i] == 10) {
      digits[i] = 0;
      digits[i - 1] ? digits[i - 1]++ : digits.unshift(1);
    }
  }

  return digits;
};
