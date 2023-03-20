//Write a code to find the sum of the numbers 1 to N.
//pertama rencana nya dari terbesar ke yang terkecil (for)
//buat satu variabel untuk nampung argument didalam for
// let a = 10;
// let b = 0;
// result = "";
// for (let i = a; i >= 1; i--) {
//   result += i + " x ";
//   b += i;
//   final = result + 0 + " = " + b;
// }
// console.log(result);

// contoh 2
let sum = 10;
b = 0;
hasil = "";
for (let i = sum; i >= 1; i--) {
  hasil += i + " + "; // hasil = hasil + i
  b += i; // b = b + i
  hasil2 = `${sum} = ` + hasil.slice(0, -3) + " = " + b;
}
console.log(hasil2);
// 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1
// 55
