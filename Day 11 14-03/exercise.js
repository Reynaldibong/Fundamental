// let a = "ab";
// let b = 28;
// result = "";
// for (let i = 0; i <= b; i++) {
//   if (b === 28) {
//     result += i;
//     result2 = result.split(" ");
//     // console.log(result);
//   }
// }
// console.log(result);

//Task 1
//contoh 1
// function titleToNumber(s) {
//   // This process is similar to
//   // binary-to-decimal conversion
//   let result = 0;
//   for (let i = 0; i < s.length; i++) {
//     result *= 26;
//     result += s[i].charCodeAt(0) - "A".charCodeAt(0) + 1;
//   }
//   return result;
// }
// console.log(titleToNumber(""));

//contoh 2
alphabets = [
  "",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
arr = [];
col = "GAL";
result = 0;
for (i = 0; i < col.length; i++) {
  lol = col[i];
  mol = alphabets.indexOf(lol);
  arr.push(mol);
}
if (col.length === 2) {
  result = arr[0] * 26 + arr[1];
} else if (col.length === 3) {
  //   result = arr[0] * 26 + arr[1] * 26 + 1;
  result = arr[0] * 26 ** 2 + arr[1] * 26 + arr[2];
}

console.log(result);

//Task 2
//pertama, di sort
const arr2 = [1, 1, 5, 8, 9, 5, 4, 3, 9];
urutan = arr2.sort();
hasil = [];

for (let j = 0; j < urutan.length; j++) {
  if (urutan[j] != urutan[j - 1] && urutan[j] != urutan[j + 1]) {
    hasil.push(urutan[j]);
  }
}
console.log(hasil);

// cara 2
let arrAwal = [2, 1, 4, 5, 4, 6, 6, 7, 8, 7];
let arrUrut = [];
for (let i = 0; i < arrAwal.length; i++) {
  let cek = arrAwal.filter((val) => val) == arrAwal[i];
}
//Task 4
function staircase() {}
