"use strict";
exports.__esModule = true;
var fs = require("fs");
var fileContent = 'im working in electems';
var message = fs.writeFileSync('run.txt', fileContent);
function copyContent(fileName, dest) {
    try {
        fs.copyFileSync(fileName, dest);
        console.log(dest);
        return true;
    }
    catch (err) {
        return false;
    }
    console.log(copyContent('run.txt', 'destination.txt'));
}
