/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let match = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      match = i
    }
  }

  return match
};
