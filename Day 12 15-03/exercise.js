//Task 1

// const arr = [2, 2, 1, 1, 1, 2, 2];
// urutan = arr.sort().includes(2).slice();
// hasil = [];
// for (let i = 0; i < arr.length; i++) {

// }
let arr2 = [1, 3, 3, 3, 5, 7, 3, 1, 3];
let n2 = arr2.length; //9

function findMajority(arr2, n2) {
  let maxCount = 0;
  let index = -1;
  for (let i = 0; i < n2; i++) {
    let count = 0;
    for (let j = 0; j < n2; j++) {
      if (arr2[i] == arr2[j]) count++;
    }
    if (count > maxCount) {
      maxCount = count;
      index = i;
    }
  }
  if (maxCount > n2 / 2) console.log(arr2[index]);
  else console.log("No Majority Element");
}
findMajority(arr2, n2);

//Task 2
roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
romankeys = Object.keys(roman);
input = "MCMXLIV";
result = 0;
for (i = 0; i < input.length; i++) {
  if (roman[input[i]] < roman[input[i + 1]]) {
    result += roman[input[i + 1]] - roman[input[i]];
    i++;
  } else {
    result += roman[input[i]];
  }
}

console.log(result);
//Task 3
// pertama baca pattern soal, in this case brarti ada pola tinggi segitiga = jumlah panjang baris
// buat variabel hasil segitiga pascal baris ke 1 dan baris ke 2
// looping sebanyak input-result.length . karena result udah diisi manual seanjang 2
// pada saat looping kita akan mencari nilai antara [1,???,1]
// caranya adalah dgn loop di dalam loop
// loop sebanyak result[index sebelumnya].length - 1. contoh untuk dpt 1,2,1 . kita cek prev 1,1 . 2 didpt dr 1+1.
// kesimpulannya loop sbnyk prev.length -1
// 1,3,3,1 => 1,2,1  3 1st dpt dr 1+2 . 3 2nd dpt dr 2+ 1.
// setelah looping dan dpt value yg kt cari.
// input 1 di dpn dan 1 d blkng. => [1, ...arrtemp ,1]
// isi arr yg sdh dtmbh 1,1 . dipush ke result

input = 5;
result = [[1], [1, 1]];
for (let i = 1; i < input - 1; i++) {
  let arrTmp = [];
  for (let j = 0; j < result[i].length - 1; j++) {
    let tmp = result[i][j] + result[i][j + 1];
    arrTmp.push(tmp);
  }
  result.push([1, ...arrTmp, 1]);
}
console.log(result);

//Task 4
// memaksimalkan potensi return terbesar dalam 6 hari, urutan nya h1 => h6 [7,1,5,3,6,4],
// utuk maksimum profit maka, beli nya di hari kedua (1) dijual di hari ke 5 (6) = -1 + 6 = 5
// output = 5
// plan 1 = tentukan hari apa yang paling banyak dpt cuan, dan hari apa yang coock untuk beli,
let arr = [1, 62, 99, 2, 43];
let n = arr.length;
hasil = [];
for (i = 0; i < arr.length; i++) {
  list = [];
  for (j = 0 + i; j < arr.length; j++) {
    profit = arr[j] - arr[i];
    list.push(profit);
  }
  maxi = Math.max(...list);
  hasil.push(maxi);
}
max = Math.max(...hasil);
hasil2 = hasil.indexOf(max);
dayToBuy = max;
console.log(dayToBuy);
