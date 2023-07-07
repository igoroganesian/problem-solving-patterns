"use strict";

/** takes in an array nums, and a targetAvg
 * returns a boolean if the avg can be made from array contents
 */
function averagePair(nums, targetAvg) {

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const average = (nums[left] + nums[right]) / 2;

    if (average === targetAvg) {
      return true;
    } else if (average > targetAvg) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

