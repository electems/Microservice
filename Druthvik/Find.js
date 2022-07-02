var vechile = [
    { name: 'car', rate: 10000, dept: 'computer' },
    { name: 'bike', rate: 15000, dept: 'electrical' },
    { name: 'lorry', rate: 20000, dept: 'mechanical' },
    { name: 'cycle', rate: 25000, dept: 'petroleum' },
    { name: 'airplane', rate: 300000, dept: 'it' },
];
var Find = vechile.find(function (vech) {
    if (vech.rate < 25000) {
        return vech.name;
    }
});
console.log(Find);
