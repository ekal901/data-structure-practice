const a = "edc";
const b = "bac";
makeAnagram(a, b);
function makeAnagram(a, b) {
  let arrangeA = a.split("").sort();
  let arrangeB = b.split("").sort();
  console.log(arrangeA);
  console.log(arrangeB);
  let aIdx = 0;
  let bIdx = 0;

  //반복해야함
  if(arrangeA[aIdx] > arrangeB[bIdx]) { // c > a
    bIdx++;
  }
}