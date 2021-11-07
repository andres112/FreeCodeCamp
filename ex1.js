function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  // normalize S
  S = S.toLowerCase();
  // important chars
  const array = S.split("");

  // check if  the chars exist at least one

  // count number of ocurrence of important chars
  let groups = new Map();
  array.reduce((a, c) => {
    if ("balon".includes(c)) {
      if (a.has(c)) {
        a.set(c, a.get(c) + 1);
      } else {
        a.set(c, 1);
      }
    }
    return a;
  }, groups);
  if (
    groups.has("b") &&
    groups.has("a") &&
    groups.has("l") &&
    groups.has("o") &&
    groups.has("n")
  ) {
    const min_ban = Math.min(groups.get("b"), groups.get("a"), groups.get("l"));
    const min_lo = Math.min(groups.get("l"), groups.get("o"));

    return min_lo > min_ban ? min_ban : min_lo / 2;
  } else {
    return 0;
  }
}
console.log(solution("BAOOLLNNOLOLGBAX"));
console.log(solution("BANBANLLOOX"));
