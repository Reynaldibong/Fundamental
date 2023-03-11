// const user2 = class {
//     constructor(){
//     this.makan = kue;    
//     }
//     greet(){} //pennulisan function dalam class
// }
// console.log(this.makan);

function faktorial(n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
     result *= n - i;
    }
    return result;
   }
   
   function faktorial2(n, sum = 1) {
    let result = sum;
    if (n == 1) {
     console.log(sum);
     return result;
    }
   
    faktorial2(n - 1, (sum *= n));
   }
   let result = faktorial2(5);
   console.log(result);
   // console.log(faktorial2(5));
   
   // faktorial2(5);
   // console.log(faktorial(5));

   