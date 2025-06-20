// 버블정렬
// function sortColors(nums: number[]): void {
//   for(let i = 0; i < nums.length; i++) {
//     for(let j = 0; j < nums.length - i - 1; j++) {
//       if(nums[j] > nums[j+1]) {
//         let temp = nums[j];
//         nums[j] = nums[j+1];
//         nums[j+1] = temp;
//       }
//     }
//   }
//   console.log(nums);
// };

// Array.sort() 이용
function sortColors(nums: number[]): void {
  nums.sort((a, b) => a - b);
}

sortColors([2,0,2,1,1,0]);
sortColors([2,0,1]);