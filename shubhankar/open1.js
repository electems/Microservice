var fs2 = require('fs');
fs2.readFile('my.txt', function (err, data) {
    if (err)
        throw err;
    var arr = data.toString().replace(/\r\n/g, '\n').split('\n');
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        console.log(i - 2);
    }
});
