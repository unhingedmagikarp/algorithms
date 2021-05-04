function miniMaxSum(arr) {
  arr = arr.sort();
  const sum = arr.reduce((a, b) => Number(a) + Number(b), 0);
  const res = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(sum - arr[i]);
  }

  console.log(res[0], res[res.length - 1]);
}

console.log(miniMaxSum([1, 2, 3, 4, 5]));
