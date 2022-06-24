var car = [
    { name: 'bmw', color: 'blue' },
    { name: 'audi', color: 'blue' },
    { name: 'honda', color: 'white' },
    { name: 'benz', color: 'silver' },
    { name: 'ferrari', color: 'red' },
    { name: 'lambo', color: 'yellow' },
];
var filter = car.filter(function (student) {
    return student.color === 'blue';
});
console.log(filter);
