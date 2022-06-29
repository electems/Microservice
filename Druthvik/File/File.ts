import * as fs from 'fs'

let data = fs.readFileSync('largefile.txt').toString('utf-8')
{
  var textByLine = data.split('\n')
  console.log(textByLine)
}

var loop = textByLine.forEach((data: any) => {
  var firstRow = data.slice(0, data.indexOf('\r\n\r\n')) // get "Name: XX"
  var name = firstRow.split(': ')[1] // get "XX

  const file = 'write and read'
  fs.exists(`../File/${name}`, (exist: any) => {
    if (exist) {
      fs.writeFileSync(`../File/${name}.txt`, data)
    } else {
      fs.appendFileSync(`../File/${name}.txt`, data)
    }
  })
})
