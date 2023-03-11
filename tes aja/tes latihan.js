// task 1
//Write a code to find area of rectangle
//rumus luas rectangle = s * s
let sisi = 4;
let luasrectangle = sisi * sisi;
console.log(luasrectangle);

//task  2
//Write a code to find perimeter of rectangle.
// rumus keliling rectangle = 2 * (p+l)
let panjang = 9;
let lebar = 4;
let kelilingrectangle = 2 * (panjang + lebar);
console.log(kelilingrectangle);

//task 3
//Write a code to find diameter, circumference and area of a circle.
//rumus diameter = r * 2
//rumus keliling = π (pi) * Diameter lingkaran (d)
//rumus luas = π (pi) * r kuadrat
let r = 10;
let π = 3.14;

let diameter = r * 2;
// console.log(diameter);

let keliling = π * diameter;
// console.log(keliling);

let luas = π * r**2;
console.log(luas);

//task 4 
//Write a code to find angles of triangle if two angles are given.
//besar sudut segitiga 180 derajat
let angle1 = 35;
let angle2 = 25;
let angle3 = 180 - angle1 - angle2 + ' ' + 'derajat';
console.log(angle3);

//task 5
//Write a code to get difference between dates in days
// perbedaan hari = date2 - date1
let date1 = new Date('2023-03-01');
let date2 = new Date('2023-03-02');
let beda = (date2 - date1) / (1000 * 60 * 60) / 24; //(86.400.000) : (3.600.000) : 24 = 1
 console.log(beda);

 //task 6
//  declare
// days
// year
// month
// day
    
 let aa = 400;
 let year = Math.floor(aa / 365);
 let month = Math.floor((aa % 365) / 30);
 let day = Math.floor((aa % 365) % 30);
 console.log(`jadi, ${aa} hari adalah ${year} tahun ${month} bulan ${day} hari`);

//day 2

//task 1
//Write a code to convert celsius to fahrenheit.
//F = °C * 9/5 + 32
let celcius = 30;
let farenheit = celcius * 9/5 + 32;

console.log(farenheit);

//task 2
//Write a code to check whether the number is odd or even
// for (let i = 1 ; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} adalah bilangan genap`);
//     } else (console.log(`${i} adalah bilangan ganjil`))
// }

let num = 10;
console.log(num % 2 === 0 ? `${num} is even` : `${num} is odd` );


//task 3
//Write a code to check whether the number is prime number or not
let n = 9;

 if (n === 2) {
    console.log('bilangan prima');
 } else if (n <= 1) {
    console.log('error');
 } else if (n % 2 === 0 || n % 3 === 0 || n % 5 === 0 || n % 7 === 0) {
    console.log('bukan bilangan prima');
 } else {
    console.log('bilangan prima');
}

//task 4
//Write a code to find the sum of the numbers 1 to N

b = 5;
c = 0;
result = '';
for (let i = b; i >= 1 ; i--) {
    result = result + i + ' + ' ;
    hasil1 = result + 0 ;
    // console.log(hasil1);
    c += i; //b = b + i
    hasil = hasil1 + ' = ' + ' ' + c ;
    
}
 console.log(hasil);



//  k = 5;
//  l = 0;
//  Hasil = '';
//  for (let j = 1; j <= 5; j++) {
//     Hasil = Hasil + j + ' + ';
//     l = l + j;
//     B = ' = ' + l;
//     Hasil1 = Hasil + B;
    
//  }
// console.log(Hasil1);



// let a = 10;
// result = ''
// for (let i = 0; i <= 5; i++) {
//     console.log(i);
//     result = result + ' + ' +  i;
// }
// console.log(result);

// let sum = 0;
// let text = `${number} → `;
// for (let i = 1; i <= number; i++) {
//  i == 1 ? (text += ` ${i}`) : (text += ` + ${i}`);
//  sum += i;
// }

// 

//task 5 
//Write a code to find factorial of a number.
const number = parseInt(8);
if (number < 0) {
    console.log('Error atuh, bilangan faktor teh, kaga ada atuh yang mines kayak matamu :)');
} else if(number === 0) {
    console.log(`'faktor dari ${number}'adalah 1`);
} else {
    let ab = 1;
    for (let i = 1; i <= number ; i++) {
        ab *= i;   
    }
    console.log(`'faktorisasi dari ${number} adalah ${ab}'`);
    //console.log(ab);
}

//task 6
//Write a code to print the first N fibonacci numbers.
let abc = 0;
let klm = 1;
let opq = 0; 
let jkl = 10;
teks = `${jkl} of fibonnaci = ${abc}, ${klm}`;
for (let i = 2; i < jkl; i++) {
    pret = abc + klm;
    teks += `, ${pret}`;
    abc = klm;
    klm = pret;
    
}
console.log(teks);

//day 3
//task 1
//Write a code to display the multiplication table of a given integer
let k = 10;
for (let i = 0; i <= 10; i++) {
   console.log(i + ' x ' + k);  
}

//task 2
//Write a code to check whether a string is a palindrome or not.
let kata1 = 'kakak';
let reverse = '';
for (let i = kata1.length -1; i >= 0 ; i--) {
    reverse += kata1.charAt(i);
}
    // }if (kata1 === reverse) {
    //     console.log(`${kata1} adalah palindrome`);
    // }else {
    //     console.log(`${kata1} bukan palindrome`);
    // }
    //console.log(kata1 === reverse ? `${reverse} merupakan palindrome` : `${reverse} bukan palindrome`);
    console.log(kata1 === reverse ? `${reverse} merupakan palindrome` : `${reverse} bukan palindrome`);

//cara 2
let stro = 'katak'
let balik = stro.replace(/ /g, '').toLowerCase().split('').reverse().join('');
console.log(balik.replace(/ /g, '').toLocaleLowerCase());
console.log(reverse === kata1.replace(/ /g, '').toLocaleLowerCase());

// task 3
//Write a code to convert centimeter to kilometer.
let cm = 1000;
let km = cm / 100000;
console.log(`${cm} centimeter sama dengan ${km} kilometer`);

// task 4
// Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”
let num1 = 97348;
console.log(`Rp. ${num1.toLocaleString('id-ID')},00`);
// console.log(number.toLocaleString().replace(/,/g, '.'));
// console.log(number.toLocaleString().split(',').join('.'));

//task 5 
//Write a code to remove the first occurrence of a given “search string” from a string
let word1 = 'Reynaldi wijaya';
let word2 = word1.replace(/Reyn/g, ' ');
console.log(word2);

//task 6
//Write a code to capitalize the first letter of each word in a string
//
// let kata = 'hello world'
// len = kata.length
// hasil = kata[0].toUpperCase() + kata.substring(1,) 
// console.log(hasil);
//cara 1 (lebih valid)
let str = 'hello world purwadhika';
let capitalize = '';
for (let i = 0; i < str.length; i++) {
 if (i == 0 || str[i - 1] == ' ') {
  capitalize += str.charAt(i).toUpperCase();
 } else {
  capitalize += str.charAt(i);
 }
}
console.log(capitalize);

//cara 2 (cuma bisa 1 spasi)
let kami = 'hello world purwadhika';
let idx = str.indexOf(' ');
//console.log(idx);
//  kami =
//  kami.charAt(0).toUpperCase() +
//  kami.substring(1, idx + 1) +
//  kami.charAt(idx + 1).toUpperCase() +
//  kami .substring(idx + 2, kami.length);
// console.log(kami);
 
//task 6
let kata = 'kambing';
let kebalik = '';
for (let i = kata.length; i >= 0; i--) {
    kebalik += kata.charAt(i);
}
console.log(kebalik);

//day 4
//buat segitiga sama sisi 
n = 10;
let tempN = n;
let digit = '';
let h = 0;
let counter = 1;

while (true) {
 h++;
 digit += ' ';
 tempN -= counter;
 counter++;
 if (tempN < 1) {
  break;
 }
}
console.log(digit);

//h = 1
//digit = " "
//tempN = 9
// counter = 2

// h =2
// digit = "  "
//tempN = 7
//counter = 3

// h = 3
// digit = "   "
// tempN = 4
//counter = 4

// h = 4
// digit = "    "

// tempN = 0
// n= 10

//
//      1
//     2 3
//    4 5 6
//   7 8 9 10
//11 12 13 14 15

num = 0;
result = '';

for (let i = 1; i <= h; i++) {
 let str = '';
 for (let j = 0; j < i && n > num; j++) {
  num++;
  if (j == 0) {
   str = digit.slice(0, Math.ceil(digit.length - i));
   if (num > 10 && num < 100) str += ` ${num} `;
   else if (num > 100) str += `${num} `;
   else str += `   ${num} `;
  } else {
   str += `${num} `;
  }
  //num = 1
  // **** *
  // str = ****
  // str = **** 1

  //num = 2
  // *** **
  // str = ***
  //str = *** 2

  //num = 3
  // str = *** 2 3

  //num = 4
  //str = **
  //str = ** 4

  //num =5
  // str = ** 4 5

  //num = 6
  // str = ** 4 5 6

  //num  = 7
  //str = *
  //str = * 7

  //num = 8
  //str = * 7 8

  //num = 9
  //str = * 7 8 9

  //num = 10
  //str = * 7 8 9 10

  //num = 11
  //str =
  //str = 11
 }

 //  str =  '**** 1
 //          '
 // result = **** 1
 //          *** 2 3
 //          ** 4 5 6
 //          * 7 8 9 10
 //          11
 str += '\n';
 result += str;
}

console.log(result);

// //          1
// //         2 3
// //        4 5 6
// //       7 8 9 10