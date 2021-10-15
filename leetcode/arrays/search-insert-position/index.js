/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Solution 1 - brute force
// const searchInsert = function (nums, target) {
//   let position;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       position = i
//     }

//     if (target > nums[i]) {
//       position = i + 1
//     }

//     if (target < nums[0]) {
//       position = 0
//     }
//   }

//   return position
// };

// Solution 2 - binary search
const searchInsert = (nums, target) => {
  let l = 0
  let r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (nums[mid] === target) return mid;

    else if (nums[mid] < target) l = mid + 1;

    else r = mid - 1;
  }

  return l;
};
