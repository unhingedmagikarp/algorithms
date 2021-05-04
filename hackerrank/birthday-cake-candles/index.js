function birthdayCakeCandles(candles) {
  // Solution 1
  const max = Math.max(...ar);
  const result = ar.filter((c) => c === max);
  return result.length;

  /** Solution 2
  const max = candles.sort()[candles.length - 1];

  return candles
    .map((candle, i) => (candle === max ? i : -1))
    .filter((index) => index !== -1).length;
  */

  /** Solution 3
  const candleMap = new Map();

  for (let i = 0; i < candles.length; i++) {
    candleMap.has(candles[i])
      ? candleMap.set(candles[i], candleMap.get(candles[i]) + 1)
      : candleMap.set(candles[i], 1);
  }

  const entries = Array.from(candleMap.values());

  return entries.sort()[entries.length - 1];
  */
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));
