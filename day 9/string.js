let str = new String("a");
let str2 = "ayam goreng";

console.log(str);
console.log(str2);
console.log(str2.charAt(2)); //karakter index (1)
console.log(str2.length); //
console.log(str2.includes("ayam"));

if (str2.includes("ayam")) console.log("ada ayam di dalam variabel ini");

let gocarpp = 87000;
let perorang = 87000 / 5 - 400;
let tiket = 250000;
let tiket1 = 250000 / 5;
let totaljajan = tiket1 + perorang;
console.log(totaljajan.toLocaleString("id-ID"));
