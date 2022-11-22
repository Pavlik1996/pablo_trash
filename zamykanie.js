function hunder(n) {
  let a = 98;

  return function () {
    return (a += n);
  };
}
let hun = hunder(2);
let abc = hunder(22);

console.log(hun());
console.log(hun());

console.log(abc());
console.log(abc());

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1

// console.log(counter2()); // ?
// console.log(counter2()); // ?
