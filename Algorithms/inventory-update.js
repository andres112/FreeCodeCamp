/**
 * Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
 * Update the current existing inventory item quantities (in arr1). If an item cannot be found,
 * add the new item and quantity into the inventory array.
 * The returned inventory array should be in alphabetical order by item.
 */

function updateInventory(arr1, arr2) {
  // array2 is the new inventory which will replace array1
  let currentInv =
    arr1.length > 0
      ? Object.assign(...arr1.map(([value, key]) => ({ [key]: value })))
      : {};

  arr2.forEach(
    (x) => (
      (currentInv[x[1]] = isNaN(currentInv[x[1]]) ? 0 : currentInv[x[1]]),
      (currentInv[x[1]] += parseInt(x[0]))
    )
  );
  return Object.entries(currentInv)
    .sort()
    .map((x) => x.reverse());
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

updateInventory(curInv, newInv);
