import * as fs from 'fs'
import { join } from 'path'

export class TrafficManagementsys {
    loadVoilations(inputFile: string): string[] {
      const  data = fs.readFileSync(join(__dirname, inputFile), 'utf-8')
      const textByLine = data.toString().split('\n')
      console.log(textByLine)
      return textByLine
    }

    sortDate(allVoilations: string[]): void {
        allVoilations.forEach((aVoilation: any) => {
          const year = aVoilation.slice(0, 3)
          this.storeViolationByYear(year, aVoilation)
        })
      }
    
      storeViolationByYear(voilationYear: string, voilation: string): void {
        fs.access(`../traffic/${voilationYear}`, (exist: any) => {
          if (exist) {
            fs.writeFileSync(
              `../traffic/${voilationYear}.txt`,
              voilation,
            )
          } else {
            fs.appendFileSync(
              `..traffic/${voilationYear}.txt`,
              voilation,
            )
            }
        })
      }
    }