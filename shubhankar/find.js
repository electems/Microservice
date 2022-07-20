var vechile = [
    { name: 'bmw', price: 90000000 },
    { name: 'audi', price: 800000000 },
    { name: 'honda', price: 75000000 },
    { name: 'verena', price: 98777777 },
];
var Find = vechile.find(function (vechi) {
    if (vechi.price < 60000000000) {
        return vechi.name;
    }
});
console.log(Find);
