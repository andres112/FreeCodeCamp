/**
 * 
 Write a function:

function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
 */

function solution(A, B, k) {
    // write your code in JavaScript (Node.js 8.9.4)

    // Validate if A == B just return mod of k
    if (B === A) {
        return B % k === 0 ? 1 : 0;
    }
    let N = B - A + 1;
    let div = 0;

    // Validate if k == 1 the length is the result
    if (k === 1) { return N }

    if (A < k && A != 0) {
        A = 1
    }

    if (A % k === 0) {
        A++
        div++
    }
    if (B % k === 0) {
        B--
        div++
    }

    N = B - A
    div = div + Math.floor(N / k);
    return div;
}
console.log(solution(2, 14, 2));
console.log(solution(11, 345, 17));
