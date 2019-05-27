let arr = [0, 5, 2, 1, 6, 3];
let pivot = arr[5];
let leftPointerIdx = 0;
let rightPointerIdx = 4;
sorting();
function sorting() {
  if(leftPointerIdx == rightPointerIdx) {
    //둘다 겹치는 idx와 pivot swap
  } else {
    leftPointerIdx = moveLeftPointer(leftPointerIdx);
    rightPointerIdx = moveRightPointer(rightPointerIdx);
    let tmp = arr[leftPointerIdx];
    arr[leftPointerIdx] = arr[rightPointerIdx];
    arr[rightPointerIdx] = tmp;
  }
}
function moveLeftPointer(leftPointerIdx) {
  for(let i = leftPointerIdx; i < arr.length; i++) {
    if(arr[i] >= pivot) {
      leftPointerIdx = i;
      return i;
    }
  }
}
function moveRightPointer(rightPointerIdx) {
  for(let i = rightPointerIdx; i >= 0; i--) {
    if(arr[i] <= pivot) {
      rightPointerIdx = i;
      return i;
    }
  }
}
