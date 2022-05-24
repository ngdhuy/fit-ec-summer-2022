/**
 * Array in ES
 */

console.clear();
let a = [1, 2, 3 ,4, 5];
console.log(a);

for(let i = 0; i < a.length; i++)
  console.log(a[i]);

console.log("----------");

a.forEach((item, index) => {
  console.log(index, " => ", item);
});

a.push(100);
console.log(a);

let b = a.pop();
console.log(a); 
console.log(b);

// Delete item of array
let c = a.splice(2, 2);
console.log(a); 
console.log(c);

console.log("----------");
let d = a.slice(0, 2);
console.log(a);
console.log(d);

a = [1, 2, 3, 4, 5];
let e = a.map((item, index) => {
  console.log(index, " => ", item);
  return item * 2;
});
console.log(e);

let f = a.filter(item => item % 2 == 0);
console.log(f);

let g = a.reduce((sum, item) => { return sum + item; }, 0);
console.log(g)