let arr = [[], [], [], [], [], []];
arr[0] = [1,1,1,0,0,0];
arr[1] = [0,1,0,0,0,0];
arr[2] = [1,1,1,0,0,0];
arr[3] = [0,0,2,4,4,0];
arr[4] = [0,0,0,2,0,0];
arr[5] = [0,0,1,2,4,0];

const hourglassXSize = 3;
const hourglassYSize = 3;

calcLocalSumAt = (x, y, arr) => {
  let xEnd = x + hourglassXSize;
  let yEnd = y + hourglassYSize;
  let sum = 0;
  for(let i = x; i < xEnd; i++) {
    for(let j = y; j < yEnd; j++) {
      sum += arr[i][j];
    }
  }
  sum -= arr[x+1][y+0];
  sum -= arr[x+1][y+2];
  return sum;
}

findMaxSum = (arr) => {
  let xTraversalSize = arr[0].length - (hourglassXSize -1); //4
  let yTraversalSize = arr.length - (hourglassYSize -1); //4

  let max = Number.MIN_VALUE;
  for(let i = 0; i < xTraversalSize; i++) {
    for(let j = 0; j < yTraversalSize; j++) {
      let sum = calcLocalSumAt(i, j, arr);
      max = max > sum ? max : sum;
    }
  }
  return max;
}

let max = findMaxSum(arr);