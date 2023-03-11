//Task 1
// Write a function to get the lowest, highest and average value in the array (with and without sort function).
hasil = 0;
function abc(bebas) {
    lowest = Math.min(...bebas);
    max = Math.max(...bebas);
    for (let i = 0; i < bebas.length; i++) {
        // hasil = hasil + bebas[i];
        hasil += bebas[i];  //sama aja dgn yang di atas 
    }
    bc = hasil / bebas.length;
    ab = Math.floor(bc);
    final = lowest + ` is lowest value of ${bebas}, `+ 'then' + ' ' + max + ` is highest value of ${bebas} ` + 'and' + ' ' + ab + ' ' + `is average value of ${bebas}` ;
    return final;
}
console.log(abc([9, 16, 25]));
//Task 2
// ● Write a function that takes an array of words and returns a string by concatenating the words in 
// the array, separated by commas and - the last word - by an 'and'.
//[1,2,3 and 4]
// function arrayword(arr) {
//     test = arr.toString().replace(arr[arr.length - 1],"and ") + (arr[arr.length-1])
//     return test;
//    }
//    console.log(arrayword(["ass","mell","boi","nit"]))

function contoh(arr) {
    test = arr.toString().replace(arr[arr.length -1], 'me') + ' ' + (arr[arr.length -1])
    return test;
}

console.log(contoh(['Top' + ' Global'+ ' Fanny' + ' and ' + ' Claude']));

//Task 3
// ● Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]

let word1 = ('Hello World tipu tipu')
result = word1.split(" ");
console.log(result);

//Task 4
// ● Write a function to calculate each element in the same position from two arrays of integer. 
// Assume both arrays are of the same length.
// ○ Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
// let array1 = [1,2,3,4];
// let array2 = [4,3,2,1];
// let array3 = []
// a = array1[0] + array2[0];

// for (let i = 0; i < array1.length; i++) {
//     array3.push(array1[i] + array2[i]);
//     // array3[i]  = (array1[i] + array2[i]);

// }
// console.log(array3);

array3 = []
function arroy(array1,array2) {
for (i = 0; i < array1.length; i++) {
    array3.push(array1[i] + array2[i]);
    // array3[i]  = (array1[i] + array2[i]);
   
} return array3
}
console.log(arroy([1,2,3,8],[23,3,2,1]));




//Task 5
// ● Write a function that adds an element to the end of an array. However, the element should only 
// be added if it is not already in the array.
// function put(arr, num) {
//     if (arr.indexOf(num) > -1) {
//     return arr;
//     } else {
//     return [...arr, num];
//     }
    
// function abcd

// console.log(abcd([1, 2, 3, 4, 5]));


// }

// console.log(put([1,2,3,4,5], 6));
// console.log(put([1,2,3,4], 3));

// function code(kak)

// console.log(code([1, 2, 3, 4]));


// let arr = ['a', 'b', 'c']
// console.log(...arr);

// function fill(abc, alpha) {
//     if (abc.indexOf(alpha) > -1) {
//         return abc;
//     } else {
//         return [...abc, alpha]
//     } 
// }

// console.log(fill([' a ', ' b ', ' c '], ' d '));
// console.log(fill([' a ', 'b', ' c '], ' c '));

//Task 6
// ● Write a function to remove all odd numbers in an array and return a new array that contains even 
// numbers only