// Write a code to convert days to years, months and days
// di konversi ke tahun
// dikonversi ke bulan
// dikonversi ke hari

let hari = 366;
pertahun = Math.floor(hari / 365);
perbulan = Math.floor((hari % 365) / 30);
perhari = Math.floor((hari % 365) % 30);
console.log(`${pertahun} tahun, ${perbulan} bulan, ${perhari} hari.`);

let day = 366;

const years = Math.floor(day / 365);
const months = Math.floor((day % 365) / 30);
const days = Math.floor((day % 365) % 30);

console.log(`${years} years, ${months} months, ${days} days`);
