"use strict";
exports.__esModule = true;
var fs = require("fs");
var data = fs.readFileSync('datefile.txt').toString('utf-8');
{
    var textByLine = data.split('\n');
    console.log(textByLine);
}
var loop = textByLine.forEach(function (data) {
    var firstRow = data.slice(0, data.indexOf(/d{2}(D)d{2}\1d{4}/g)); // get "Name: XX"
    var name = firstRow.split(': ')[0]; // get "XX
    var file = 'write and read';
    fs.exists("../File/".concat(name), function (exist) {
        if (exist) {
            fs.writeFileSync("../File/".concat(name, ".txt"), data);
        }
        else {
            fs.appendFileSync("../File/".concat(name, ".txt"), data);
        }
    });
});
