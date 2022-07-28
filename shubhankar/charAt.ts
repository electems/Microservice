// // var n = new String ('this is the new string')

// // console.log(n.charAt(3))

// const fs = require('fs');

// fs.appendFile('message.txt', 'data to append', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
const fs = require('fs');
  
// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('./run.txt', {encoding:'utf8'});
 
// Display the file data
console.log(data);