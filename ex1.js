function solution(text) {
  let times = 0;
  const seed = "balon";

  // preprocessing the text
  try {
    text = text.toString().trim();
    text = text.toLowerCase();
    console.log(text);
  } catch (error) {
    console.error(error);
  }

  // convert into array
  const array = text.split("").filter((x) => seed.includes(x));
  // if not all the chars exist
  if (seed.split("").some((x) => !array.includes(x))) {
    return 0;
  }
  console.debug(array);

  // group by chars
  const groups = array.reduce((a, c) => {
    a[c] = a[c] ? a[c] + 1 : 1;
    return a;
  }, {});
  console.debug(groups);

  // the chars occurrences
  const one_oc = ["b", "a", "n"]; //once
  const two_oc = ["l", "o"]; //twice

  let min_one = Math.min(...one_oc.map((x) => groups[x]));
  let min_two = Math.min(...two_oc.map((x) => groups[x]));

  console.debug(min_one, min_two);

  if (min_two < 2) return 0;
  while (min_one > 0 && min_two > 1) {
    times += 1;
    min_one -= 1;
    min_two -= 2;
  }
  return times;
}
console.log(solution("BAOOLLNNOLOLGBAX"));
console.log(solution("BANBANLLOOX"));
console.log(solution("BBBAaOOLLNnnOLOLGBAX"));
