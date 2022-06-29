import * as fs from 'fs'
import { join } from 'path'
const readline = require('readline')

export class loadTrafficevoilators {
  syncReadFilereadfile(String: string): any {
    var data = fs.readFileSync(join(__dirname, String), 'utf-8')
    var textByLine = data.toString().split
    console.log(textByLine)
    return textByLine
  }
  sortDate() {
    var myArray = fs.readFileSync('datefile.txt', 'utf8').split('\n')
    myArray.forEach((data: any) => {
      // var currentYear = new Date().getFullYear()
      let year = data.slice(0, 3)
      let name = year.split(': ')[0]
    })
  }
  // storeViolationByYear(_currentYear) {
  //   fs.exists(`../File/${name}`, (exist: any) => {
  //     if (exist) {
  //       fs.writeFileSync(`../File/${name}.txt`, data)
  //     } else {
  //       fs.appendFileSync(`../File/${name}.txt`, data)
  //     }
}
