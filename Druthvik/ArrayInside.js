// var car1 = [
//   { name: 'bmw', color: 'blue' },
//   { name: 'audi', color: 'blue' },
//   { name: 'honda', color: 'white' },
//   { name: 'benz', color: 'silver' },
//   { name: 'ferrari', color: 'red' },
//   { name: 'lambo', color: 'yellow' },
// ]
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var profiles = [
    { userId: 1, firstName: 'Danielle', lastName: 'Contreras' },
    { userId: 2, firstName: 'Alfredas', lastName: 'Fehér' },
    { userId: 3, firstName: 'Orpheus', lastName: 'De Jong' },
];
// Transform the profiles into an object keyed by the userId:
var profilesByUserId = profiles.reduce(function (next, profile) {
    var _a;
    var userId = profile.userId;
    return __assign(__assign({}, next), (_a = {}, _a[userId] = profile, _a));
}, {});
console.log(profilesByUserId);
