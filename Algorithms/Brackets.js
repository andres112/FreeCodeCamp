/**
 * 
A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..200,000];
string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
 */

const solution = (s) => {
  let valid = false;
  const opposite = new Map();
  opposite.set("{", "}");
  opposite.set("[", "]");
  opposite.set("(", ")");

  // validate if empty
  if (s.length === 0) return 1;
  // validate if odd number of symbols
  if (s.length % 2 !== 0) return 0;

  // preprocess the input
  s = s.trim();
  const s_array = s.split("");
  // convert into array
  console.debug(s_array);
  // validate nested
  const result = s_array.slice(0).reduce((a, c, i, arr) => {
    if (a.length === 0 || opposite.has(c)) {
      a.push(c);
    } else {
      if (opposite.get(a.at(-1)) === c) {
        a.pop();
      } else {
        arr.splice(1);
      }
    }
    return a;
  }, []);
  valid = result.length === 0 ? 1 : 0;
  return valid;
};

console.log(solution("{[()()]}"));
console.log(solution("([)()]"));
console.log(solution("[()()]"));
console.log(solution("{[({[()]})]}("));
