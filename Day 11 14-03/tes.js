const arr2 = [1, 3, 9, 4, 7, 1, 4, 5, 6];
urutan = arr2.sort();
console.log(urutan);
arr3 = [];
for (let i = 0; i < urutan.length; i++) {
  if (urutan[i] != urutan[i - 1] && urutan[i] != urutan[i + 1]) {
    arr3.push(urutan[i]);
  }
}
console.log(arr3);
