//Anagram ialah kata baru yang dihasilkan dengan cara menyusun ulang huruf-huruf dari kata yang berbeda makna.
//contoh = makna : makan = true
//output = true
//pertama, bikin variabel,
//
makan = "makan";
makan2 = makan.includes("mak");
makan3 = makan.includes("na");
console.log(makan3);

let s = "makan";
let t = "kanma";
function anagram2(s = "", t = "") {
  if (s.length != t.length) {
    return console.log(false);
  } else {
    for (const letter of t) {
      if (!s.includes(letter)) {
        return console.log(false);
      }
      s.replace(letter, "");
    }
    return console.log(true);
  }
}
