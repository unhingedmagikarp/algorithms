# Mini-Max Sum

- Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

## Constraints

- `1 ≤ arr[i] ≤ 10^9`

## Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.

## Input Format

A single line of five space-separated integers.

## Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

### Example 1

  > 1 2 3 4 5

  ##### Sample Output:

  > 10 14

  ##### Explanation:
  > The numbers are 1, 2, 3, 4, and 5. Calculate the following sums using four of the five integers:

    Sum everything except 1, the sum is 14.
    Sum everything except 2, the sum is 13.
    Sum everything except 3, the sum is 12.
    Sum everything except 4, the sum is 11.
    Sum everything except 5, the sum is 10.

## Solution(s)

`Time Complexity:  O(n)`
