"use strict";
exports.__esModule = true;
var fs = require("fs");
var filecontent = 'this is how the work have to done';
var message = fs.writeFileSync('raju.txt', filecontent);
function copycontent(filename, dest) {
    try {
        fs.copyFileSync(filename, dest);
        console.log(dest);
        return true;
    }
    catch (err) {
        return false;
    }
    console.log(copycontent('raju.txt', 'rahul.txt'));
}
