InsertionSort = (arr) => {
  for(let i = 1;  i<arr.length; i++) {
    let temp_value = arr[i];
    for(let j = 0; j < i; j++) {
      if(arr[j] > temp_value) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  console.log(arr);
}

let arr = [8,4,2,3];
InsertionSort(arr);