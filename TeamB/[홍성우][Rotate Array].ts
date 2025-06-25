function rotate(nums: number[], k: number): void {
  const start = k % nums.length;
  const spliceList = nums.splice(nums.length - start);

  nums.unshift(...spliceList);
}
