/**
 * Define promise function
 */

console.clear(); 

const my_rand = new Promise((resolve, reject) => {
  setTimeout(() => {
    let value = parseInt(Math.random() * 10); 
    if(value % 2 == 0) {
      console.log("WIN");
      return resolve(value);
    } else {
      console.log("LOSE");
      return reject(-1);
    }
  }, 1000);
})

my_rand.then(success => {
  console.log(success);
}).catch(err => {
  console.log(err);
}).finally(() => {
  console.log("DONE");
})