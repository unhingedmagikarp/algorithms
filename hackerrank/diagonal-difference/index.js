function diagonalDifference(arr) {
  let resA = 0,
    resB = 0;

  for (let i = 0; i < arr.length; i++) {
    resA += arr[i][i];
    resB += arr[i][arr.length - (i + 1)];
  }

  return resA > resB ? resA - resB : resB - resA;
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
