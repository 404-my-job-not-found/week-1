/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * comma operator를 사용
 * nums.splice안에서 nums value를 전부 제거 => filtering 된 unique한 값을 nums에 넣어줌
 * comma operator 마지막 값은 반환값이 되므로 최종적으로 변경된 nums.length를 반환해줌
 *
 * 시간 복잡도
 * filter + indexOf = O(n²)
 * splice = O(n)
 * 총합	O(n²)
 */

var removeDuplicates = nums => (
  nums.splice(0, nums.length, ...nums.filter((v, i) => nums.indexOf(v) === i)), nums.length
);

/**
 * 추가 학습 코드
 * two pointer, in-place 방식
 * 시간 복잡도
 * for = O(n)
 */
// var removeDuplicates = function(nums) {
//   if(nums.length === 0) return 0

//   let uniqeLength = 0

//   nums.forEach((_,i) => {
//     if(nums[i] !== nums[uniqeLength]) {
//       uniqeLength
//       nums[uniqeLength] = nums[i]
//     }
//   })

//   return uniqeLength+1
// };
