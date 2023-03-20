// const segitiga = (n) => {
//   height = "";
//   number = 1;
//   for (let i = 1; i <= n; i++) {
//     abc = "";
//     for (let j = 1; j <= i; j++) {
//       number < 10 ? (abc += "0" + j) : (abc += j);
//       number++;
//     }
//     height += abc + "\n";
//   }
//   return height;
// };
// console.log(segitiga(15));

// let a = null;
// console.log(typeof a);

// console.log(typeof _);

// function name(a, b) {
//   console.log(a * b);
// }
// //currying
// function name1(factor) {
//   return function mul(number) {
//     return number * factor;
//   };
// }
// let nn = name1(3);
// /*let nn = (number) {
//   return nummber * 3;
// }*/
// name(2, 2);
// console.log(nn(3));

//forEach
// let arr = [1, 2, 3, 4];
// // arr.forEach((val) => {
// //   return val;});
// console.log(arr.map((val) => val));
// let arr = [1, 2, 3, 4];
// console.log(arr.map((val) => val));

//typeof
// boolean = 123;
// console.log(typeof Boolean(boolean);
// console.log(typeof new Boolean(true));

console.log(typeof 1); //number
console.log(typeof NaN); // number
console.log(typeof "Hello World"); //string
console.log(typeof null); //object
console.log(typeof undefined); // undefined
console.log(typeof []); //object
console.log(typeof {}); //object
console.log(typeof true); //boolean
console.log(typeof function () {}); //function

let person = {
  name: "John",
  age: 30,
  gender: "male",
  occupation: "engineer",
  introduce: function () {
    console.log(
      "Hi, my name is " +
        this.name +
        ". i'm " +
        this.age +
        " years old, " +
        this.gender +
        ", and i work as " +
        this.occupation +
        "."
    );
  },
};

person.introduce(); // should log "Hi, my name is John. I'm 30 years old, male, and I work as an engineer." to the console

let car = {
  make: "honda",
  model: "Civic",
  year: 2020,
  color: "blue",
  start: function () {
    console.log(
      "The " +
        this.color +
        " " +
        this.make +
        " " +
        this.model +
        " " +
        "has started"
    );
  },
  stop: function () {
    console.log(
      "The " +
        this.color +
        " " +
        this.make +
        " " +
        this.model +
        " " +
        "has stoped"
    );
  },
};

car.start();
car.stop();
// should log "The blue Honda Civic has started." to the console
// should log "The blue Honda Civic has stopped." to the console

let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  pages: 281,
  read: function () {
    console.log(
      'Reading the book "' + this.title + '" by ' + this.author + "."
    );
  },
  addPages: function (num) {
    this.pages += num;
    console.log(
      "Added " +
        num +
        " pages to the book. It now has " +
        this.pages +
        " pages."
    );
  },
};

book.read(); // should log "Reading the book "To Kill a Mockingbird" by Harper Lee." to the console
book.addPages(20); // should log "Added 20 pages to the book. It now has 301 pages." to the console

person = {
  name: "John",
  age: 30,
  gender: "male",
};

const akeys = Object.keys(person);
akeys2 = akeys.length;

console.log(akeys2); // Output: ['name', 'age', 'gender']

function printMessage(message) {
  console.log(message);
}

printMessage("Hello, world!");
let arrz = [10, 29, 84, 95, 37, 93, 72, 65];
console.log(arrz.sort((a, b) => a - b));

// let hitungLuas = function (panjang, lebar) {
//   return panjang * lebar;
// };
// console.log(hitungLuas(20, 5));

function hitungLuas2(a, b) {
  a = a * b;
  console.log(a);
}
hitungLuas2(20, 5);

let data = {
  nama: "jambrong",
  umur: "25",
  alamat: "yogyakarta",
};
// data["umur"] = 27;
// delete data.umur; // cara assign keys dlm object bisa pakai . atau []
// if ("umur" in data) {
//   console.log("ada");
// } else {
//   console.log("tida ada");
// }
// // console.log(data);

// for (let key in data) {
//   console.log(`${key}: ${data[key]}`);
// }

let abc = Object.keys(data);
console.log(abc);

let nilai = 80;
let grade;

if (nilai >= 90) {
  grade = "A";
} else if (nilai >= 80) {
  grade = "B";
} else if (nilai >= 70) {
  grade = "C";
} else if (nilai >= 60) {
  grade = "D";
} else {
  grade = "E";
}

console.log("Nilai Anda adalah " + nilai + " (" + grade + ")");

let tahun = 2024;

if (tahun % 4 === 0 && (tahun % 100 !== 0 || tahun % 400 === 0)) {
  console.log(tahun + " adalah tahun kabisat.");
} else {
  console.log(tahun + " bukan tahun kabisat.");
}

function getvalue(a) {
  // let value = 10;
  a += 5;
  return a;
}
console.log(getvalue(10));

function isPositive(number) {
  if (number > 10) {
    console.log(true);
  } else {
    console.log(false);
  }
  // return number;
}

isPositive(12);

function getAge() {
  let age = 30;
  age = age + 5;
  age - 2;
  return age;
}

console.log(getAge()); // undefined

helloWorld();

function helloWorld() {
  console.log("Hello, world!");
}

function tambah(a, b) {
  return a + b;
}
console.log(tambah(5, 4));

bce = 92882;
console.log(bce);

bce = 585875;
console.log(bce);

// console.log(typeof);

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => {
//   sum1 = accumulator * currentValue;
//   return sum1;
// });
// console.log(sum); // Output: 15

// const numbers = [7, 2, 3, 4, 5, 6, 2];
// const sum = numbers.reduce((accumulator) => accumulator * 3);
// console.log(sum); // Output: 15

// const numbers = [1, 2, 3, 4, 5];
// const initialValue = 10;
// const sum = numbers.reduce((accumulator, currentValue) => {return accumulator + currentValue;}, initialValue);
// console.log(sum);

const numbers = [1, 2, 3, 4, 5];
const b = numbers.map((number) => {
  console.log(number * 2);
});

// let jaj = "ABCDEFG";
// kab = Array.from(jaj);
// console.log(kab);

let jaj = "ABCDEFG";
kab = jaj.split("");
console.log(kab);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = Object.keys(fruits);
console.log(keys);

let arr = [1, 2, 3, 4];
arr2 = arr.map((a) => a * 10);
console.log(arr2);

let message = "Hello World!";
let text = message.constructor;
console.log(text);

// k = 1
// while k <= 10:
//     print(i)
//     i += 1
// console.log();

let arr5 = [1, 2, 3, 4, 5];
arr5.forEach(function (val, vel, vol) {
  vol[vel] = val * 2;
});
console.log(arr5);

let obj = {
  nama: "mom",
  age: 44,
  hobby: "cooking",
};
Object.keys(obj).forEach(function (key) {
  console.log(key + ": " + obj[key]);
});

let arr6 = [1, 2, 3, 4];

let lol = arr6.map(function (element) {
  return Number(element * 2);
});
console.log(lol);

const number = [1, 2, 3, 4, 5];
const oddnumber = number.filter((num) => !(num % 2 === 0));
console.log(oddnumber);

const products = [
  { name: "Laptop", price: 5000, brand: "Asus" },
  { name: "Smartphone", price: 2000, brand: "Samsung" },
  { name: "Tablet", price: 3000, brand: "Apple" },
  { name: "Headphone", price: 1000, brand: "Sony" },
];

const expensiveProducts = products.filter((product) => product.brand == "Asus");

console.log(expensiveProducts); // Output: [{ name: 'Laptop', price: 5000, brand: 'Asus' }, { name: 'Tablet', price: 3000, brand: 'Apple' }]

console.log(Boolean([]));

count = 6;
while (count > 0) {
  console.log("kelapa", count);
  count--;
}

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
