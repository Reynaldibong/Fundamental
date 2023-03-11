//Day 1 
console.log("Hello World");

let message; //ini namanya deklarasi

message = 'Hello' //assign 

let number;
number = 123; //Assign 

console.log(message);
console.log(number);

let a = 'let'; //tidak bisa declare bisa assign 
const b = 'const'; //tidak bisa reassign tidak bisa declare 
var c = 'var'; // bisa declare bisa assign

a = 'let2';
a = 123;
console.log(a);

let satu1 = 0;

const abjad = {
    kamu: 'abc',
    aku: 1234
};

abjad.kamu = 'abcd';
abjad.aku = 12345;
abjad.anda = 'blabla';

console.log(abjad);
// console.log(kamu.length);

let nama1 = 20;
let nama2 = 10;
let nama3 = '5';
let gabung = nama1 + nama2 + nama3;
console.log(gabung);
console.log(typeof gabung);

//pelajari string method yang ada di w3school

let huruf = 'kamu makan sapi';
let huruf2 = 'kamu makan ayam';
console.log(huruf.length);
console.log(huruf.charAt(5));
console.log(huruf.slice(0, 4));

let a1 = 'kamu';
let b1 = 'lol';
let campur = a1.concat(' ' + b1);

console.log(campur.includes('lol'));
console.log(campur.indexOf('m'));
console.log(campur.replace('lol', 'anjing'));
console.log(campur.split('', 2));
console.log(campur.toLocaleUpperCase());

let katabaru = 'kueputu' ;
let oke = katabaru.split('u')
console.log(oke);

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let jlhalpha = alphabet.split('');
console.log(jlhalpha);

let depan = 'Reynaldi';
let belakang = 'Wijaya';
console.log(depan.concat(' ' + belakang));

let saya = 'david';
let jiah = `halo nama saya ${saya}`;

console.log(jiah);

let aj = 8 % 3;
console.log(aj);

let budi = 'sule';
budi += ' ' + 'andre'

console.log(budi);

let aya = 2 + 1 + 'juna';

console.log(aya);


// Day 2

let location = 1 || 2;
console.log(Boolean(location));

if (location) {
    console.log('boolean true');
}

let makanan = 'nasi';
let jumlah = 5;

if ((jumlah >= 10 || jumlah >= 5) && (makanan === 'kue' || makanan === 'nasi')) {
    console.log('mari makan');
}
else {
    console.log('cicakku');
}
if (makanan && jumlah){
    if (makanan === 'kue') {
    console.log('mari makan kue') 
    } else if (makanan === 'nasi') {
    console.log('mari makan nasi') 
    } else {
    console.log('gak jadi makan');
    }
    }
   
    
    let hewan = 'sapi';

    if (hewan === 'sapi') {
        let makanannya = 'rumput';
        let hewan = 'ular'
        console.log(makanannya);
        console.log(`makanan ${hewan} adalah ${makanannya}`);
    } else {
        hewan = 'monyedd';
    }
 console.log(hewan);


