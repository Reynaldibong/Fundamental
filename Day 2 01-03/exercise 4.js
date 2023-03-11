//Write a code to find the sum of the numbers 1 to N.
a = 1;
b = 0;
result = '';
for (let i = a ; i <= 10 ; i++) {
    // console.log(i);
    result = result + i + ' + ' ;
    b += i;
    hasil = result + ' = ' + ' ' + b;
    // console.log(b);
    // hasil = result + 5 + ' = ';
    // result2 = i + hasil;
    // console.log(result2);
}
console.log(result);

