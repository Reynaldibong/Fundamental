
let obj = {
 p1 : 'property 1',
 p2 : 12345,
 func : (n) => {
    console.log(n);
    return n;
 }
};

let arr = [1, 2, 3, 4, 5, 'a', true, {prop1 : 'abc'}, ['a', 'b', 'c'], null, undefined]

console.log(obj);
console.log(obj.p1);
obj.func(obj.p2);
console.log(arr);
