input = 6;
result = [[1], [1, 1]];
for (let i = 1; i < input - 1; i++) {
  let arrTmp = [];
  for (let j = 0; j < result[i].length - 1; j++) {
    let tmp = result[i][j] + result[i][j + 1];
    arrTmp.push(tmp);
  }
  result.push([1, ...arrTmp, 1]);
}
console.log(result);
