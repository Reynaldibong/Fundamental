// Write a code to check whether the number is odd or even
// pasti bilangan genap kalau di modulus 2 , else nya diluar itu berarti ganjil
let n = 10;
for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    console.log(`${i} adalah bilangan genap`);
  } else {
    console.log(`${i} adalah bilangan ganil`);
  }
}
