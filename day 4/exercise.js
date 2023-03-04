// no 4
// Write a function to remove all odd numbers in an array and return a new array that contains 
// even numbers only

var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var hasil = angka.filter(function (numbers) {
    return numbers % 2 ===0;
});
 console.log(`${hasil} adalah bilangan genap`);

// no 3
// Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))²
// ● Parameters : weight & height
// ● Return values :
