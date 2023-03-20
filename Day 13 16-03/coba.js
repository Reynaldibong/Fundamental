const a = { a: "a" };
const b = JSON.stringify(a); // dari objek ke string
const c = JSON.parse(b); // dari string ke objek
console.log(JSON.stringify(c));
