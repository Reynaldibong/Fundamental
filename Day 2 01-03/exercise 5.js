//Write a code to find factorial of a number.
//5 = 5 * 4 * 3 * 2 * 1 contoh factorial number
// cara ku
let num = 5;
let b = 1;
result = "";
for (let i = num; i >= 2; i--) {
  result += i + " x ";
  b *= i;
  result2 = result + 1;
}
console.log(`${num} = ${result2}` + " = " + b);

//cara jordan
// let factorial = 1;
// let number = 5;
// // n = n * (n-1) ( n-2) (n-3)...
// // 5 = 5 * 4 * 3 * 2 * 1
// text = `${number} → `;

// //i = 1
// // 2 <= 5
// // 5 -> 1 x 2 x 3 x 4 x 5
// // factorial = 120

// for (let i = 1; i <= number; i++) {
//   i == 1 ? (text += ` ${i}`) : (text += ` x ${i}`);
//   factorial = factorial * i;
// }
// console.log(`Factorial of ${text} = ${factorial}`);
