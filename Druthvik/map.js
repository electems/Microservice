var col = [1, 2, 3];
// let col1 = col.map(function (digit: number): number {
//   return digit * 3
// })
// console.log(col)
// let col2 = col.reduce(function (totalnum: number, curval: number): number {
//   return totalnum + curval / 2
// }, 0)
// console.log(col2)
var map = col.map(function (number) {
    return number + 1;
});
console.log(map);
