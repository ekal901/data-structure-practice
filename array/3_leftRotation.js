function rotLeft(a, d) {
  for(let i = 0; i < d; i++) {
    let firstElement = a.shift();
    a.push(firstElement);
  }
  return a;
}

let a = [1, 2, 3, 4, 5];
let result = rotLeft(a, 4);