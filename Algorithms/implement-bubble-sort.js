/**
This is the first of several challenges on sorting algorithms. Given an array of unsorted items, we want to be able to return a sorted array. We will see several different methods to do this and learn some tradeoffs between these different approaches. While most modern languages have built-in sorting methods for operations like this, it is still important to understand some of the common basic approaches and learn how they can be implemented.

Here we will see bubble sort. The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.

This method requires multiple iterations through the array and for average and worst cases has quadratic time complexity. While simple, it is usually impractical in most situations.

Instructions: Write a function bubbleSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
 */
function bubbleSort(array) {
  // Only change code below this line
  const sorted = array.reduce(function (p, c) {
    // include the first element in accumulate
    if (p.length === 0) {
      p.push(c)
    } else {
      // validate always the last value in accumulate, is the biggest
      const last = p[p.length - 1]
      // validate if current value is greater than last in array
      if (c >= last) {
        p.push(c)
      }
      else {
        let index = 0
        // find the position where the current value is bigger than previous
        for (let x = p.length - 1; x >= 0; x--) {
          if (c >= p[x]) {
            index = c >= 0 ? x + 1 : x
            break
          }
        }
        // insert the current value in correct position
        p.splice(index, 0, c)
      }
    }
    return p
  }, [])

  console.log(sorted)
  return sorted;
  // Only change code above this line
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])
bubbleSort([-1,34, 0, 2,-2])