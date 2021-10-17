/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1
  const res = Array(nums.length)

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > nums[right]) {
      res[i] = Math.pow(nums[left++], 2)
    } else {
      res[i] = Math.pow(nums[right--], 2)
    }
  }

  return res
};

console.log(sortedSquares([-4, -1, 0, 3, 10]))
// sortedSquares([-4, -1, 0, 3, 10])
// Output: [0,1,9,16,100]