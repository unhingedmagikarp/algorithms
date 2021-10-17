/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let anchor = 0;
  for (let explorer = 0; explorer < nums.length; explorer++) {
    if (nums[explorer] !== 0) {
      let temp = nums[anchor]
      nums[anchor] = nums[explorer]
      nums[explorer] = temp

      anchor++
    }
  }

  return nums
};

// const moveZeroes = function (nums) {
//   let anchor = 0;
//   let explorer = 1;

//   while (explorer < nums.length) {
//     let temp

//     if (nums[explorer] !== 0) {
//       temp = nums[anchor]
//       nums[anchor] = nums[explorer]
//       nums[explorer] = temp

//       anchor++
//     }

//     explorer++
//   }

//   return nums
// };

// console.log(moveZeroes([2, 1]))
// Output: [2, 1]

// console.log(moveZeroes([0, 1, 0, 3, 12]))
// Output: [1,3,12,0,0]