/**
 * The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in
 * either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
 * Symmetric difference is a binary operation, which means it operates on only two elements.
 * So to evaluate an expression involving symmetric differences among three elements (A △ B △ C),
 * you must complete one operation at a time. Thus, for sets A and B above,
 * and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
 */

function sym(...args) {
  args = args.map((x) => [...new Set(x)]);

  let result = args[0];

  if (args.length > 1) {
    for (let i = 1; i < args.length; i++) {
      const duplicated = result.filter((x) => args[i].includes(x));
      result = result
        .filter((x) => !duplicated.includes(x))
        .concat(args[i].filter((x) => !duplicated.includes(x)));
    }
  }
  console.log(result);

  return result;
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
