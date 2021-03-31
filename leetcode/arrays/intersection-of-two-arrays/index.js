/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const intersect = (nums1, nums2) => {
  const map = new Map();

  for (let i = 0; i <= nums1.length - 1; i++) {
    map.has(nums1[i])
      ? map.set(nums1[i], map.get(nums1[i]) + 1)
      : map.set(nums1[i], 1);
  }

  return nums2.filter((num) => {
    if (map.has(num) && map.get(num) > 0) {
      map.set(num, map.get(num) - 1);
      return true;
    } else {
      return false;
    }
  });
};
