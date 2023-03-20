// Write a code to print the first N fibonacci numbers
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 = fibonacci numbers
//pertama, buat variabel penampung dlu = temp1, temp2 (0, 1)
// output = 10 number(s) of fibonnaci :  0, 1, 1, 2, 3, 5, 8, 13, 21, 34

let a = 0;
b = 1;
c = 0;
num = 10;
hasil = `${num} number of(s) fibonacci ${a}, ${b}`;
for (let i = 2; i < num; i++) {
  c = a + b;
  hasil += `, ${c}`; //asssign hasil
  a = b;
  b = c;
}
console.log(hasil);
// 4 < 10
// c = 2
// a = 1
// b = 2

// let temp1 = 0,
//   temp2 = 1,
//   temp3 = 0;
// number = 10;
// text = `${number} number(s) of fibonnaci :  ${temp1}, ${temp2}`;
// for (let i = 2; i < number; ++i) {
//   temp3 = temp1 + temp2;
//   text += `, ${temp3} `;
//   console.log(text);
//   temp1 = temp2;
//   temp2 = temp3;
// }
// 10 number(s) of fibonnaci :  0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// 10 < 10
// temp3 = 34
//temp1 = 21
//temp2 = 34
// console.log(text);

// contoh 3
let abc = 0;
let bce = 1;
let dbe = 0;
number = 10;
resulta = `${number} number of fibonacci  ${abc}, ${bce}`;
for (let i = 2; i < number; i++) {
  dbe = abc + bce;
  resulta += `, ${dbe}`;
  abc = bce;
  bce = dbe;
}
console.log(resulta);
// 2<10
// abc = 1
// bce = 1
// dbe = 1
