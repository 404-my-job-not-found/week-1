// function containsDuplicate(nums: number[]): boolean {
//   let result = false;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums.includes(nums[i], i + 1)) {
//       result = true;
//       break;
//     }
//   }
//   return result;
// }

function containsDuplicate(nums: number[]): boolean {
  const numSet = new Set(nums);
  return numSet.size !== nums.length;
}