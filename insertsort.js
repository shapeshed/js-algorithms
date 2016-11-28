function insertionSort(arr) {

  var length = arr.length,
    value,
    i,
    j;

  for (i = 0; i < length; i++) {

    value = arr[i];
    j = i;

    while(j > 0 && arr[j-1] > value) {
      arr[j] = arr[j-1];
      j = j-1;
    }

    arr[j] = value;
  }

  return arr;
}


module.exports = insertionSort;
