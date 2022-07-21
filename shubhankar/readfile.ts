const fs2 = require('fs');
fs2.readFile('run.txt', function(err, data) {
    if(err) throw err;
    const arr = data.toString().replace(/\r\n/g,'\n').split('\n');
    for(let i of arr) {
        console.log(i-2);
    }
});