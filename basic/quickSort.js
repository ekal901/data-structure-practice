let arr = [0, 5, 2, 1, 6, 3];

let leftPointerIdx = 0;
let rightPointerIdx = arr.length;
let pivotIdx = rightPointerIdx;
let pivot = arr[pivotIdx];
rightPointerIdx -= 1;

while(true) {
  while(arr[leftPointerIdx] < pivot) {
    leftPointerIdx += 1;
  }
  while(arr[rightPointerIdx] > pivot) {
    rightPointerIdx -= 1;
  }
  
  if(leftPointerIdx >= rightPointerIdx) {
    break;
  } else {
  
  }
  return;
}
