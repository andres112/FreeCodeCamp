/**
 * 
 * Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
 * Assume that all characters in the provided string are each unique.
 * For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
 * but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
 */
function permAlone(str) {
  // first calculate the permutations
  const permutation_list = permutation(str.split(''))

  // console.log(permutation_list)
  let pre = []

  if (permutation_list.length > 1) {
    // validate each permutation if contains consecutive repeated
    permutation_list.forEach(function (cur) {
      // With reduce can I compare previos vs current value
      const r = cur.reduce(function (p, c, i, arr) {
        if (p === c) {
          // eject early by mutating iterated copy
          arr.splice(1)
          return false
        }
        return c
      })
      // Include to pre only the not repeted
      if (r) { pre.push(cur) }
    })
  }
  else{
    pre = permutation_list
  }
  console.log(str, pre.length);
  return pre.length;
}

// Function for permutations computing, receive array
const permutation = function (array) {
  if (array.length <= 2) return array.length === 2 ? [array, [array[1], array[0]]] : array  
  return array.reduce((pre, curr, i) =>
    pre.concat(permutation([...array.slice(0, i), ...array.slice(i + 1)]).map(x => [curr, ...x]))
    , [])
}

permAlone("aab") //should return 2.
permAlone("aaa") //should return 0.
permAlone("aabb") //should return 8.
permAlone("abcdefa") //should return 3600.
permAlone("abfdefa") //should return 2640.
permAlone("zzzzzzzz") //should return 0.
permAlone("a") //should return 1.
permAlone("aaab") //should return 0.
permAlone("aaabb") //should return 12.