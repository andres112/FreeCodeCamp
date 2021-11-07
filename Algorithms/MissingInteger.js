function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    // discard negatives and 0
    A = A.filter(x => x > 0)
    // remove duplicated values
    A = Array.from(new Set(A))
    const N = A.length

    if (N === 0) { return 1 }
    if (N === 1) { return A[0] === 1 ? 2 : 1 }
    A = A.sort((a, b) => a - b)
    if (A[0] !== 1) { return 1 }
    if (A[N - 1] - A[0] === N - 1) { return A[N - 1] + 1 }
    return A.slice(0).reduce((a, c, i, arr) => {
        if (c - a > 1) {
            arr.splice(1)
            return a + 1
        }
        return c
    })
}

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 3, 6, 4, 5, 2]));
console.log(solution([1, 1, 1, 1]));
console.log(solution([0]));
console.log(solution([1]));
console.log(solution([1, 10000]));
console.log(solution([-1, -3, -6, -4, 0, -2]));
console.log(solution([2,5]))
