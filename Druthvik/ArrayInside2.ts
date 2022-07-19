import { Reducee } from './ArrayInside'

let aa = new Reducee(1, 2, 3)

console.log(aa)

let reduce = this.Re(function (totalval: number, curval: number): number {
  return totalval + curval
}, 0)
console.log(reduce)
