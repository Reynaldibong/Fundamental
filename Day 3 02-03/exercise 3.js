// Write a code to display the multiplication table of a given integer.
let n = 5;
for ( let  a = 1; a <= 13; a++){
console.log(n + ' X ' + a );
}

// Write a code to check whether a string is a palindrome or not.
//declare string
// looping untuk membalikan string
let str = "madam"
// console.log(str.charAt(str.length-1))
let reverse = "";
for (let i = str.length -1; i >= 0; i--) {
    reverse += str.charAt(i)
//     console.log(i);
    // reverse = reverse + str.charAt(i)
}if(str == reverse) {
    console.log(`${str} adalah polindrome`)
}else{
    console.log(`${str} bukan polindrome`)
}


// Write a code to convert centimeter to kilometer.
// 1 cm = 0.00001 km
let cm = 5;
let i = cm / 100000;

console.log(`${cm} CM jika dikonversikan ke dalam KM, maka hasilnya adalah ${i} KM`);
 
// Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”
number = 100000;
// console.log(number.toLocaleString().replace(/,/g, '.'));
// console.log(number.toLocaleString().split(',').join('.'));

// let strNumber = number.toLocaleString('id-ID') + ',00';
console.log(`Rp. ${number.toLocaleString('id-ID') + ',00'}`);

// Write a code to remove the first occurrence of a given “search string” from a string
let a = 'abcde';
let ganti = 'cd'
let result = a.replace(ganti, ``)

console.log(result);

// Write a code to capitalize the first letter of each word in a string
let kata = 'hello world'
len = kata.length
hasil = kata[0].toUpperCase() + kata.substring(1,len)
console.log(hasil);

// Write a code to reverse a string.

// buat segitiga sama sisi
// n = 15




//method string number array pljri di w3 school
