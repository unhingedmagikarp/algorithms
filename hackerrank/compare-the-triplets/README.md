# Compare the Triplets

- Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from `1 to 100` for three categories: problem clarity, originality, and difficulty.

- The rating for Alice's challenge is the triplet `a = (a[0], a[1], a[2])`, and the rating for Bob's challenge is the triplet `b = (b[0], b[1], b[2])`.

- The task is to find their comparison points by comparing `a[0]` with `b[0]`, `a[1]` with `b[1]`, and `a[2]` with `b[2]`.

> If `a[i] > b[i]`, then Alice is awarded 1 point.
  If `a[i] < b[i]`, then Bob is awarded 1 point.
  If `a[i] = b[i]`, then neither person receives a point.
  Comparison points is the total points a person earned.

Given `a` and `b`, determine their respective comparison points.

## Constraints

- `1 ≤ a[i] ≤ 100`
- `1 ≤ b[i] ≤ 100`

## Input Format

The first line contains 3 space-separated integers, `a[0]`, `a[1]`, and `a[2]`, the respective values in triplet `a`.
The second line contains 3 space-separated integers, `b[0]`, `b[1]`, and `b[2]`, the respective values in triplet `b`.

## Output Format

- `int[2]`: Alice's score is in the first position, and Bob's score is in the second.

### Example 1

  ##### Sample Input:
  > 5 6 7
    3 6 10

  ##### Sample Output:
  > 1 1

  ##### Explanation:

  In this example:

- `a = (a[0], a[1], a[2]) = (5, 6, 7)`
- `b = (b[0], b[1], b[2]) = (3, 6, 10)`

  Now let's compare each individual score:

  - `a[0] > b[0]`, so Alice receives  point.
  - `a[1] = b[1]`, so nobody receives a point.
  - `a[2] < b[2]`, so Bob receives  point.

  > Alice's comparison score is `1`, and Bob's comparison score is `1`. Thus, we return the array `[1, 1]`.

## Solution(s)

`Time Complexity:  O(n)`
