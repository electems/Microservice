import * as fs from 'fs'

let data = fs.readFileSync('datefile.txt').toString('utf-8')
{
  var textByLine = data.split('\n')
  console.log(textByLine)
}

var loop = textByLine.forEach((data: any) => {
  var firstRow = data.slice(0, data.indexOf(/d{2}(D)d{2}\1d{4}/g)) // get "Name: XX"
  var name = firstRow.split(': ')[0] // get "XX

  const file = 'write and read'
  fs.exists(`../File/${name}`, (exist: any) => {
    if (exist) {
      fs.writeFileSync(`../File/${name}.txt`, data)
    } else {
      fs.appendFileSync(`../File/${name}.txt`, data)
    }
  })
})
