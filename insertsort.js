function insertionSort(arr) {

  var length = arr.length,
    value,
    i,
    j;

  for (i = 0; i < length; i++) {

    value = arr[i];

    for (j = i-1; j > -1 && arr[j] > value; j--) {
      arr[j+1] = arr[j];
    }

    arr[j+1] = value;
  }

  return arr;
}


module.exports = insertionSort;
