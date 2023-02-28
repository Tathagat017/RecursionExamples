//Simple iteration via recursion
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
