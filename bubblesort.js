
/*
 * Bubble sort 
 * Data structure Array
 * Worst-case performance O(n^2)
 * Best-case performance O(n)
 * Average performance  O(n^2)
 * Worst-case space complexity  O(1) auxiliary
 *
 */
function bubblesort(arr) {
  do {
    var swapped = false;
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] > arr[i+1]) {
        var tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;
        swapped = true;
      } 
    }
  } while (swapped);

  return arr;
}

module.exports = bubblesort;
