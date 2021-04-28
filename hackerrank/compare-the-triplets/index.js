/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
  let resA = 0,
    resB = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      resA++;
    } else if (b[i] > a[i]) {
      resB++;
    }
  }

  return `${resA} ${resB}`;
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
