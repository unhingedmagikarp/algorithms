function plusMinus(arr) {
  let pos = 0,
    neg = 0,
    zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zero++;
    } else {
      arr[i] > 0 ? pos++ : neg++;
    }
  }

  console.log(pos / arr.length);
  console.log(neg / arr.length);
  console.log(zero / arr.length);
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
