/**
 * Define variable
 */

// define const
const a = 10; 
console.log(a);

// define global variable
var b = 11; 

// define local variable in code block
let c = 22; 

console.log(b, c);

if(a % 10 == 0) {
  b = 33; 
  c = 44; 
  console.log("b =", b, "c =", c);

  var d = 55; 
  let e = 66;
  console.log("d = ", d, "e = ", e);
}

console.log("d = ", d); 
// console.log("e = ", e); // => error

console.log("---------------------");
let f = 100; 
console.log(f, typeof(f));

f = "Hello world";
console.log(f, typeof(f));