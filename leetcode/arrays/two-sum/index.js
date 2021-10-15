/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Solution 1 - brute force
// const twoSum = function (nums, target) {
//   for (const i = 0; i < nums.length; i++) {
//     for (const j = 0; j < nums.length; j++) {
//       if (i !== j && nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// };

// Solution 2 - hashmap
// const twoSum = function (nums, target) {
//   const numMap = new Map()
//   let output = []
//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i];

//     if (numMap.has(diff)) {
//       output = [numMap.get(diff), index]
//     }

//     numMap.set(number, index)
//   }
//   return output
// }

// Solution 4 - simpler hashmap
const twoSum = (nums, target) => {
  let map = {};

  for (let [index, num] of nums.entries()) {
    if (map[num] !== undefined) {
      return [storage[num], index]
    }

    map[target - num] = index
  }
}

// Solution 3 - array iteration
// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i];
//     const match = nums.indexOf(diff, i + 1)

//     if (match !== -1) {
//       return [i, match]
//     }
//   }
// }

// Solution 4 - two pointer
// const twoSum = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1
//   while (left < right) {
//     const sum = nums[left] + nums[right]
//     if (sum == target) {
//       return [left, right]
//     }
//     else if (sum > target) {
//       right--
//     } else {
//       left++
//     }
//   }

//   return [-1, -1]
// }

