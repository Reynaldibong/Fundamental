//Write a code to get difference between dates in days.
// date1 = new Date ('2023-08-01') contoh penulisan
//convert ke millisecond = date 2 - date 1
//convert ke hari = milisecond / (1000 * 60 * 60 * 24)
let date1 = new Date("2001-08-08");
let date2 = new Date("2001-08-15");
milisecond = date2 - date1;
hari = milisecond / (1000 * 60 * 60 * 24);
console.log(hari);
