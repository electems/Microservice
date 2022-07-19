var tasks = [
    {
        name: 'Write for Envato Tuts+',
        duration: 120
    },
    {
        name: 'Work out',
        duration: 60
    },
    {
        name: 'Procrastinate on Duolingo',
        duration: 240
    },
];
var helo = function (_tasks, callback) {
    var new_array = [];
    tasks.forEach(function (element, index, array) {
        new_array.push(callback(element));
    });
    return new_array;
};
console.log(helo);
