let arr = [2, 4, 1, 6, 8, 5, 3, 7];
mergeSort(arr);

function mergeSort(arr) {
  if(arr.length == 1) {
    return arr;
  }
  let middle = Math.ceil(arr.length / 2); 
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  mergeSort(left);
  mergeSort(right);
}

function merge(left, right) { //implementation
  console.log(left);
  console.log(right);
}