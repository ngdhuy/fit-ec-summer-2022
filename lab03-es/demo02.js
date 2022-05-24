/**
 * Define function
 */

//? default define function
function sum(a, b) {
  let c = a + b; 
  return c;
}

let d = sum(3, 4);
console.log("d = ", d);

d = sum(3, '4');
console.log("d = ", d);

//? define anonymous function (callback function)
const my_func_double = function(a) {
  return a * 2;
}

console.log(my_func_double(100));

//? define arrow function

// const my_func_square = function(a) { 
//   return a * a;
// };

// const my_func_square = (a) => { 
//   return a * a;
// };

// const my_func_square = a => { return a * a; };

const my_func_square = a => a * a;

console.log(my_func_square(9));