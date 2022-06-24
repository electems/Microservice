const arr = [1, 2, 3, 4]

let reduce = arr.reduce(function (totalval: number, curval: number): number {
  return totalval + curval
}, 0)
console.log(reduce)
