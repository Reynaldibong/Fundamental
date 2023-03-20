// Write a code to check whether the date is a weekend.
// sabtu minggu = weekend
input = new Date("2023-03-20");
let arrHari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];
if (input === arrHari[5] || input === arrHari[6]) {
  console.log("adalah weekend");
} else {
  console.log("adalah weekdays");
}
console.log(input);
