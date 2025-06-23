/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // nums 자체를 변경
    // 직관적으로 봤을 때,
    // 마지막 숫자를 떼서, 가장 앞에
    // k번 반복
    // for (let i = 0; i < k; i++) {
    //     const last = nums.pop();      
    //     nums.unshift(last);           
    // }

    // 위 처럼 풀면, k가 54944 와 같이 큰 수라면 시간 초과가 나온다
    // O(n*k) 가 되버리기 때문

    const n = nums.length;
    k = k % n;

    const reverse = (start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    };

    reverse(0, n - 1);     // 전체 뒤집기
    reverse(0, k - 1);     // 앞쪽 k개 뒤집기
    reverse(k, n - 1);     // 나머지 뒤집기
};