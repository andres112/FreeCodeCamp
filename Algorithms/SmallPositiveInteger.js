/**
Find the smallest integer greather than 0
 */
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A = Array.from(new Set(A));
  A = A.filter((x) => x > 0);
  A = A.sort((a, b) => a - b);
  const length = A.length;
  if (length === 0 || A[0] > 1) {
    return 1;
  }
  if (length === 1 && A[0] == 1) {
    return A[0] + 1;
  }
  if (A[length - 1] - A[0] === length - 1) {
    return A[length - 1] + 1;
  }
  return A.slice(0).reduce((a, c, i, arr) => {
    if (c - a > 1) {
      arr.splice(1);
      return a + 1;
    }
    return c;
  });
}

console.log(solution([3, 5, 2]));
