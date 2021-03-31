/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = (nums) => {
  const numSet = new Set(nums);

  return nums.length !== numSet.size;
};

console.log(containsDuplicate([1, 2, 3, 1]));
