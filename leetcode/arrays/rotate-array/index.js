/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// const rotate = function (nums, k) {
//   const res = Array(nums.length)

//   nums.forEach((num, index) => {
//     const newPosition = index + k
//     if (newPosition < nums.length) {
//       res[newPosition] = num
//     } else {
//       res[newPosition % nums.length] = num
//     }
//   })

//   return res
// };

const rotate = function (nums, k) {
  k = k % nums.length

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

const reverse = function (nums, start, end) {
  while (start < end) {
    let temp = nums[start]
    nums[start++] = nums[end]
    nums[end--] = temp
  }
}

// const rotate = function (nums, k) {
//   nums = nums.reverse()

//   const start = nums.slice(0, k).reverse()
//   const end = nums.slice(k, nums.length).reverse()
//   nums = start.concat(end)

//   console.log(nums)
//   return nums
// };

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
// [5,6,7,1,2,3,4]
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
