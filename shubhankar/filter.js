var car = [
    { name: 'bmw', color: 'blue' },
    { name: 'audi', color: 'pink' },
    { name: 'honda', color: 'yellow' },
    { name: 'verena', color: 'mangogreen' }
];
var filter = car.filter(function (boy) {
    return boy.color === 'mangogreen';
});
console.log(filter);
