/**
 Find the smalles substring in N which contains all the k characters
 */
function MinWindowSubstring(strArr) {
  // code goes here
  if (
    Array.isArray(strArr) &&
    strArr.length === 2 &&
    strArr[0].length >= strArr[1].length
  ) {
    const n_array = strArr[0].split("");
    const k_array = strArr[1].split("");
    let section_size = k_array.length;
    let nos = n_array.length - section_size;
    console.log("section: " + section_size + " #ofSec: " + nos);
    let result = null;
    while (!result && nos >= 0) {
      for (let i = 0; i <= nos; i++) {
        // get the substrings from whole string
        let array = n_array.slice(i, i + section_size);
        result = array.join("");
        for (const k of k_array) {
          if (!array.includes(k)) {
            result = null;
            break;
          }
          const index = array.findIndex((x) => x === k);
          array.splice(index, 1);
        }
        if (result) {
          break;
        }
      }
      section_size++;
      nos--;
    }
    return result;
  }
  return false;
}

// keep this function call here
console.log(MinWindowSubstring(["caae", "cae"]));
