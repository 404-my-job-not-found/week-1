function removeDuplicates(nums: number[]): number {
  const result: number[] = [];

  for (let num of nums) {
    const isAlreadyExist = result.includes(num);

    if (!isAlreadyExist) {
      result.push(num);
    }
  }

  return result.length;
}
