selectionSort = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    let lowestIndex = i;
    for(let j = i+1; j < arr.length; j++){
      if(arr[lowestIndex] > arr[j]) {
        lowestIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[lowestIndex];
    arr[lowestIndex] = temp;
  }
}
let arr = [4,2,7,1,3];
selectionSort(arr);