/**
 * Define json object
 */

console.clear();
let product = {
  id: 1, 
  name: 'iPhone'
};

console.log(product);

let products = [
  {
    id: 0, 
    name: 'iPhone'
  }, 
  {
    id: 1, 
    name: 'iPad', 
    price: 2500
  }, 
  {
    id: 2, 
    name: 'Car', 
    type: 'Sedan', 
    price: 8555.88
  }
];

console.log(products);
console.log(products[2]);

//? convert JSON Object to String
console.log(JSON.stringify(product));

let str = JSON.stringify(products);
console.log(str);

//? convert String to JSON Object
let objs = JSON.parse(str);
console.log(objs);

//? convert string to Number
let a = '123';
let b = '45.6';
let c = parseInt(a) + parseFloat(b);
console.log(c);