/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  let start = 0;
  let end = numbers.length - 1;

  while (end > start) {
    let sum = numbers[start] + numbers[end];

    if (sum < target) {
      start++
    } else if (sum > target) {
      end--
    } else {
      return [start + 1, end + 1]
    }

  }
};

console.log(twoSum([2, 7, 11, 15], 9))
// Output: [1,2]