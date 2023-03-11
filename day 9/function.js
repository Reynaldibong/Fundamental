//cara 1
function recursive(a) {
  if (a == 6) {
    return 0;
  }
  return a + recursive(a + 1);
}
console.log(recursive(1));
//cara 2
function recur2(a, sum = 0) {
  sum += a;
  if (a == 1) {
    return sum;
  }
  return recur2(a - 1, sum);
}
console.log(recur2(5));
