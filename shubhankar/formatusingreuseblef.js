"use strict";
exports.__esModule = true;
function padto2digits(num) {
    return num.toString().padStart(2, '0');
}
function findDate(date) {
    return ([
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDay(),
    ].join('-') + '  ' +
        [
            padto2digits(date.getHours()),
            padto2digits(date.getMinutes()),
            padto2digits(date.getSeconds()),
        ].join(':') + '   ' +
        [
            padto2digits(date.getMilliseconds()),
            padto2digits(date.getTimezoneOffset()),
        ]);
}
var dat = findDate(new Date);
console.log(dat);
