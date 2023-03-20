// Write a code to display the multiplication table of a given integer.

let n = 10;
for (let i = 1; i <= n; i++) {
  console.log(`${n} x ${i}`);
}

// Write a code to check whether a string is a palindrome or not.
//declare string
// looping untuk membalikan string
// let str = "madam";
// // console.log(str.charAt(str.length-1))
// let reverse = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   reverse += str.charAt(i);
//   //     console.log(i);
//   // reverse = reverse + str.charAt(i)
// }
// if (str == reverse) {
//   console.log(`${str} adalah polindrome`);
// } else {
//   console.log(`${str} bukan polindrome`);
// }

// contoh 2
abc = "kabak";
reverse = "";
for (let i = abc.length - 1; i >= 0; i--) {
  reverse += abc.charAt(i);
}
if (abc === reverse) {
  console.log(`${abc} is a palindrome`);
} else {
  console.log(`${abc} is not palindrome`);
}

// contoh 3
kata1 = "kakek Sugiono";
reverse = "";
kata2 = kata1.toLowerCase().replace(/ /g, "");
for (let i = kata2.length - 1; i >= 0; i--) {
  reverse += kata2.charAt(i);
}
if (kata2 === reverse) {
  console.log(`${kata1} is a palindrome`);
} else {
  console.log(`${kata1} is not a palindrome`);
}

//contoh 4
let word1 = "KoDok";
let jadi2 = word1.toLowerCase().replace(/ /g, "").split("").reverse().join("");
let word2 = word1.toLowerCase().replace(/ /g, "");
console.log(jadi2);
word2 === jadi2
  ? console.log(`${word1} palindrome`)
  : console.log(`${word1} is not palindrome`);

// Write a code to convert centimeter to kilometer.
// 1 cm = 0.00001 km

//contoh 1
let cm = 5;
let i = cm / 100000;

console.log(
  `${cm} CM jika dikonversikan ke dalam KM, maka hasilnya adalah ${i} KM`
);
//contoh 2
let Cm = 100000;
let km = Cm / 100000;
console.log(`${Cm.toLocaleString("id-ID")}cm = ${km}km`);

// Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”

// contoh 1
number = 100000;
// console.log(number.toLocaleString().replace(/,/g, '.'));
// console.log(number.toLocaleString().split(',').join('.'));

// let strNumber = number.toLocaleString('id-ID') + ',00';
console.log(`Rp. ${number.toLocaleString("id-ID") + ",00"}`);

//contoh 2
angka = 10000;
console.log(`Rp. ${angka.toLocaleString("id-ID")},00`);

// Write a code to remove the first occurrence of a given “search string” from a string
let a = "abcde";
let ganti = "cd";
let result = a.replace(ganti, ``);
console.log(result);

//contoh 2
let kata3 = "kaminari";
let hasil = kata3.replace(/mina/g, "");
console.log(hasil);

// Write a code to capitalize the first letter of each word in a string
let str = "hello world purwadhika";
let capitalize = "";
for (let i = 0; i < str.length; i++) {
  if (i == 0 || str[i - 1] == " ") {
    capitalize += str.charAt(i).toUpperCase();
  } else {
    capitalize += str.charAt(i);
  }
}
console.log(capitalize);

//contoh 2 (ternary oprerator)
let str1 = "hello orld purwadhika";
let capitalize1 = "";
for (let i = 0; i < str1.length; i++) {
  i == 0 || str1[i - 1] == " "
    ? (capitalize1 += str1.charAt(i).toUpperCase())
    : (capitalize1 += str1.charAt(i));
}
console.log(capitalize1);

//contoh 3
//target nya kata awal dan setelah space
let str2 = "hello dunia tipu tipu";
capitalize2 = "";
for (let i = 0; i < str2.length; i++) {
  i === 0 || str2[i - 1] === " "
    ? (capitalize2 += str2.charAt(i).toUpperCase())
    : (capitalize2 += str2.charAt(i));
}
console.log(capitalize2);
// Write a code to reverse a string.
// bikin kata nya kebalik, ex : 'makan' = 'nakam'

let kata4 = "makan";
let jadi = "";
for (let i = kata4.length - 1; i >= 0; i--) {
  jadi += kata4.charAt(i);
}
console.log(jadi);
// buat segitiga sama sisi
// n = 15

//method string number array pljri di w3 school
