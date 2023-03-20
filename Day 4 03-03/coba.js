// let arr = ['try','your', 'luck']
// console.log(arr.toString()) //convert array to string
// // console.log(arr.join());
// // console.log(arr.pop());
// // console.log(arr.push());
// // console.log(arr.shift());
// // console.log(arr.unshift());
// // console.log(arr.length);
// let arr2 = ['with', 'powerfull', 'spirit']
// console.log(arr.concat(arr2));

// arr = [1,2,3,4,5,6];
// console.log(arr.toString().replace(/,/g, ''));
// console.log(arr.pop());
// console.log(arr.push(5));
// console.log(arr);
// arr2 = [8,9,10,11]
// arr3 = [4,5,6]
// arr = arr.concat(arr2); //reassign (arr)
// arr.push(...arr2) //pakai spread, spread itu buat hilangin array []

//nested loop
// arr = [1, 2, 3];
// arr2 = [4, 5, 6, [8, 9, 10, 11, [12, 13, 14, 15]]];
// for (let i = 0; i < arr2.length; i++) {
//   console.log(arr2[i]);
//   for (let j = 0; j < arr2[i].length; j++) {
//     console.log(arr2[i][j]);
//     for (let k = 0; k < arr2[i][j].length; k++) {
//       console.log(arr2[i][j][k]);
//     }
//   }
// }
// console.log(0 < undefined);

// function square(s) {
//   return s * s;
// }
// console.log(square(4));

// function square2(s) {
//   console.log(s * s);
// }
// square2(4);

// function loop(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//     if (i === 2) {
//       return;
//     }
//   }
// }
// loop(5);

// function lol(a) {
//   console.log(a + a);
// }
// lol(5);

// const func = (a) => {
//   return a / a
// }
// console.log(func(3));

function lol2(b) {
  return a + b;
}
let a = 4;
console.log(lol2(6));

const ab = function (z) {
  return z + z;
};
console.log(ab(2));

let fa = (x) => {
  return x * x;
};
console.log(fa(5));

function jenis(gender = "male") {
  if (gender === "male" || gender === "female") {
    return "cowok dan cewek";
  }
  return "NB";
}
console.log(jenis());

// const tambah10 = (arr) => {
//   arr.push(10);
//   return arr;
// };
// console.log(tambah10([1, 2, 3, 4]));

function tambah10(arr) {
  arr.push(10);
  return arr;
}
console.log(tambah10([1, 2, 3, 4]));

// function loop(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// }
// loop(5);

const loop = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
    if (i === 3) {
      return;
    }
  }
};
loop(5);
let arr = [1, 2, 3, 4];
let newArr = arr.map((val) => {
  return val + 1;
});
console.log(newArr);
console.log("masih masuk");

//Hello Udin welcome to purwadhika
function getMsg(firstname) {
  function sayHello() {
    return "Hello " + firstname + " ";
  }
  function Welcome() {
    return "Welcome to purwadhika";
  }
  return sayHello() + Welcome();
}
console.log(getMsg("udin"));

const segitiga = (n) => {
  let number = 1;
  let result = "";
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      if (number < 10) str += "0" + number + " ";
      //spy angka 2 digit tetap  rapi (gak ada nol di depan angka)
      else str += number + " ";
      number++;
    }
    result += str + "\n"; //spy hasilnya new line
  }
  return result;
};
console.log(segitiga(10));
