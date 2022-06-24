// var car1 = [
//   { name: 'bmw', color: 'blue' },
//   { name: 'audi', color: 'blue' },
//   { name: 'honda', color: 'white' },
//   { name: 'benz', color: 'silver' },
//   { name: 'ferrari', color: 'red' },
//   { name: 'lambo', color: 'yellow' },
// ]

// const vechile1 = [{ car1 }, { name: 'bike', rate: 4000 }]

// console.log(vechile1)

// export class Reducee {
//   //number: number;
//   //   name: string;
//   //   salary: number;

//   ordertype: number
//   ordercount: number
//   orderdate: number

//   constructor(ordertype: number, ordercount: number, orderdate: number) {
//     this.ordertype = ordertype
//     this.ordercount = ordercount
//     this.orderdate = orderdate
//   }
// }
const profiles = [
  { userId: 1, firstName: 'Danielle', lastName: 'Contreras' },
  { userId: 2, firstName: 'Alfredas', lastName: 'Fehér' },
  { userId: 3, firstName: 'Orpheus', lastName: 'De Jong' },
]

// Transform the profiles into an object keyed by the userId:
const  = profiles.reduce((next, profile) => {
  const { userId } = profile
  return { ...next, [userId]: profile }
}, {})
console.log(profilesByUserId)
