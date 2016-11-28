/*
 * Bubble sort 
 * Data structure Array
 * Worst-case performance O(n²)
 * Best-case performance Ω(n+k)
 * Average performance Θ(n+k)
 * Worst-case space complexity O(n·k)
 */
function sort(arr) {

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


function bucketSort(array, bucketSize) {
  
  if (array.length === 0) { return array }

    var i,
    minValue = array[0],
    maxValue = array[0],
    bucketSize = bucketSize || 5,
    result = [];

  array.forEach(function (currentVal) {
    if (currentVal < minValue) {
      minValue = currentVal;
    } else if (currentVal > maxValue) {
      maxValue = currentVal;
    }
  })

  var buckets = new Array(bucketSize);

  buckets.forEach(function (val, i) {
    buckets[i] = [];
  });


  array.forEach(function (currentVal) {
    buckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
  });

  buckets.forEach(function(bucket) {
    sort(bucket);
    bucket.forEach(function (element) {
      result.push(element)
    });
  });

  return result;

}

module.exports = bucketSort;
