"use strict";
exports.__esModule = true;
exports.trafficevoilation = void 0;
var fs = require("fs");
var path_1 = require("path");
var readline = require('readline');
var data;
var textByLine;
var trafficevoilation = /** @class */ (function () {
    function trafficevoilation() {
    }
    trafficevoilation.prototype.syncReadFilereadfile = function (String) {
        data = fs.readFileSync((0, path_1.join)(__dirname, String), 'utf-8');
        textByLine = data.toString().split;
        console.log(textByLine);
        return textByLine;
    };
    trafficevoilation.prototype.sortDate = function () {
        var loop = this.textByLine.forEach(function (data) {
            new Date().getFullYear;
            return loop;
        });
    };
    return trafficevoilation;
}());
exports.trafficevoilation = trafficevoilation;
var a = new trafficevoilation();
a.syncReadFilereadfile('./datefile.txt');
a.sortDate();
