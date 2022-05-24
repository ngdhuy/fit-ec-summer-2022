/**
 * Callback function
 */

console.clear();

const f_1 = () => {
  console.log('f_1 is started');
  setTimeout(() => {
    console.log('f_2 is started');
    setTimeout(() => {
      console.log('f_3 is started');
      setTimeout(() => {
        console.log('f_4 is started');
      }, 1000);
    }, 2000);
  }, 1000);
  console.log('f_1 is stopped');
}

f_1();