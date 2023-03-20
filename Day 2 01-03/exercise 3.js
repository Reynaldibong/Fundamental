// Write a code to check whether the number is prime number or not
// bilangan prima 2,3,5,7,11
// pertama buat dl yang bukan primer pakai modulus 2,3,5,7
// angka 1 dan dibawah nya gk di hitung, bikin jadi if
let n = 20;
if (n === 2 || n === 3 || n === 5 || n === 7) {
  console.log("prima");
} else if (n <= 1) {
  console.log("error");
} else if (n % 2 === 0 || n % 3 === 0 || n % 5 === 0 || n % 7 === 0) {
  console.log("bukan prima");
} else {
  console.log("prima");
}
