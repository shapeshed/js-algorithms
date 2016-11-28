
/* Mergesort
 * Data structure Array
 * Worst-case performance O(n log n)
 * Best-case performance  O(n log n) typical, O(n) natural variant
 * Average performance  O(n log n)
 * Worst-case space complexity  О(n) total, O(n) auxiliary
 */
function mergeSort(arr)
{

  var length = arr.length,
    mid    = Math.floor(length * 0.5),
    left   = arr.slice(0, mid),
    right  = arr.slice(mid, length);

  if(length === 1) {
    return arr;
  }

  return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {

  var result = [];

  while(left.length || right.length) {

    if(left.length && right.length) {

      if(left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }

    } else if (left.length) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }

  }

  return result;

}


module.exports = mergeSort;
