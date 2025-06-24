// 정수 배열 nums를 오른쪽으로 k칸 회전시켜라
function rotate(nums: number[], k: number): void {
	// k가 더 클때를 위한 값
	k %= nums.length

	// - 붙히는 이유, 배열의 끝에서부터 k개를 가져오기 위해서
	const rotateArray = nums.slice(-k).concat(nums.slice(0, -k))
	console.log("rotateArray", rotateArray)

	// 새 배열이 아닌 nums 에 값을 넣어주기 위한 for문
	for (let i; i < nums.length; i++) {
		nums[i] = rotateArray[i]
	}
}

rotate([1, 2], 3)
rotate([1, 2, 3, 4, 5, 6, 7], 3)
