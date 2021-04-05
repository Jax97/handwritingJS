function mergeSort(arr) {
  let mid = arr.length >> 1;
  if (mid === 0) {
    return arr;
  }

  return merge(
    mergeSort(arr.slice(0, mid)),
    mergeSort(arr.slice(mid, arr.length))
  );
}

function merge(arr1, arr2) {
  let res = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] > arr2[0]) {
      res.push(arr2[0]);
      arr2.shift();
    } else {
      res.push(arr1[0]);
      arr1.shift();
    }
  }
  return [...res, ...arr1, ...arr2];
}

let arr = [1, 2, 3, 4, 1, 4, 312, 3, 4, 2, 1, 5];
console.log(mergeSort(arr));
