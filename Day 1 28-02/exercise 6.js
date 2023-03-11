// Write a code to convert days to years, months and days
// di konversi ke tahun 
// dikonversi ke bulan
// dikonversi ke hari 

let day = 3000;

const years = Math.floor(day / 365);
const months = Math.floor((day % 365) / 30);
const days = Math.floor((day % 365) %30);

console.log(`${years} years, ${months} months, ${days} days`);