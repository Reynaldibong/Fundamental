
// let obj = {
//  p1 : 'property 1',
//  p2 : 12345,
//  func : (n) => {
//     console.log(n);
//     return n;
//  }
// };

// let arr = [1, 2, 3, 4, 5, 'a', true, {prop1 : 'abc'}, ['a', 'b', 'c'], null, undefined]

// console.log(obj);
// console.log(obj.p1);
// obj.func(obj.p2);
// console.log(arr);
// console.log(arr[3]);

//Loop

// for (let i = 1; i <=20; i++) {
//    if (i % 15 === 0) {
//        console.log('fizzbuzz');
//    } else if (i % 3 === 0){
//        console.log('buzz');
//    } else if (i % 5 === 0){
//        console.log('fizz');
//    } else {
//        console.log(i);
//    }
// }

// for (let i = 0; i < 11; i++) {
//    if (i % 2 === 0) {
//       console.log('monyed');
//    } else if (i % 3 === 0) {
//       console.log('rusa');
//    }else if (i % 5 === 0) {
//       console.log('babi');
//    } else {
//       console.log(i);
//    } 
// }

for (let i = 1; i <= 5; i++) {
   if (i % 2 === 0 ) {
      console.log(i, 'merupakan bilangan genap');
   } else {
      console.log(i, 'merupakan bilangan ganjil');
   }
   }

   let user = {
      name: 'David',
      greet() {
      console.log('hello');
      }
  };

  let person = {
   name: 'Frengky',
   age: 19,
  }
  console.log(person.name);
