function CountDown(num) {
  if (num <= 0) {
    console.log("All done");
    return;
  }

  console.log(num);
  num--;
  CountDown(num);
}

CountDown(100);

function sumRange(num) {
  if (num == 1) return 1;

  return num + sumRange(num - 1);
}

console.log(sumRange(4));
