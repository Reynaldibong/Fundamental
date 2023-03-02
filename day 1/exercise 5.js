//Write a code to get difference between dates in days.
let tanggal_1 = new Date ("2001-08-09");
let tanggal_2 = new Date ("2001-12-09");

//dikonversi ke milisecond
let dalammilisecond = tanggal_2 - tanggal_1;

//dikonversi ke hari 
let dalamhari = dalammilisecond / (1000*60*60*24);

console.log(dalamhari);