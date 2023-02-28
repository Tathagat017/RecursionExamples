//Simple function to find summation of till the given number
function sumRange(num) {
  if (num == 1) return 1;

  return num + sumRange(num - 1);
}

console.log(sumRange(4));
