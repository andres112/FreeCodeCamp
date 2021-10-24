/**
Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
 */
function selectionSort(array) {
  // Only change code below this line
  let sorted = []
  let index = array.length - 1
  // iterate array to get the min value
  while (index >= 0) {
    // assumes max value to start
    let min = Number.MAX_VALUE
    for (let x of array) {
      // get the min value of array
      if (x <= min) {
        min = x
      }
    }
    // get the number of times min values is in array
    const counter = array.filter(el => el === min).length
    // remove min value from array
    array = array.filter(el => el != min)
    // decrease control index number of times was found min value
    index -= counter
    // push min values to sorted 
    sorted.push(...Array(counter).fill(min))
  }

  console.log(sorted)
  return sorted;
  // Only change code above this line
}

selectionSort([1, 4, 2, 8, -2])