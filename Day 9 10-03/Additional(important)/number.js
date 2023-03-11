//number
let angka = 10000;
let inf = -Infinity; //paling kcil
let inf2 = Infinity; // paling besar sejavascript

let strnumber1 = angka.toString(); // cara ubah ke string
let strnumber2 = angka + ""; // cara 2
console.log(angka.toLocaleString("id-ID")); //currency
console.log(angka.toFixed(2)); //decimal
console.log(angka.toExponential());

console.log(1000000000000000000 > inf);

console.log(strnumber1);
console.log(strnumber2);

console.log(angka++); //angka =+ 1 postFix
console.log((angka += 1)); // angka += 1 preFix
