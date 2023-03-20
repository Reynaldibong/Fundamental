// Task 1
// Create a function that can create a triangle pattern according to the height we provide like the following
//nested for/loop
const segitiga = (n) => {
  number = 1;
  result = "";
  for (let i = 1; i <= n; i++) {
    str = "";
    for (let j = 1; j <= i; j++) {
      number < 10 ? (str += "0" + number + " ") : (str += number + " ");
      number++;
    }
    result += str + "\n";
  }
  return result;
};
console.log(segitiga(10));

// Task 2
//Create a function that can loop the number of times according to the input we provide, and will
//replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
//pakai loop

const fizzBuzz = (n) => {
  str = "";
  for (let i = 1; i < n; i++) {
    if (!(i % 3) && !(i % 5)) str += "fizzbuzz ";
    else if (!(i % 3)) str += "fizz ";
    else if (!(i % 5)) str += "buzz ";
    else str += i + " ";
  }
  return str;
};
console.log(fizzBuzz(15));

//task 3
//Create a function to calculate Body Mass Index (BMI)
//formula bmi weight(kg) / height (meter)kuadrat
const BMI = (w, h) => {
  let bmi = w / h ** 2;
  if (bmi <= 18.5) {
    return "less weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "ideal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "overweight";
  } else if (bmi >= 30 && bmi <= 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
};
console.log(BMI(78, 1.86));

//task 4
//Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
const even = (...arr) => {
  //0 true
  return arr.filter((val) => !(val % 3)); // (())=>(())
};
console.log(even(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//task 5
// Write a function to split a string and convert it into an array of words
const splitArr = (word) => {
  return word.split(" ");
};
console.log(splitArr("Kucing barong"));
