import  fs  from 'fs'
import { TrafficVoilationManagement } from './traffic_voilations'
import { read } from 'fs';

const datefile = './datelist.txt'

describe('Return Mock data to test the function', () => {
  test('should return data', () => {
    const readFile = new TrafficVoilationManagement()
    const output = readFile.loadVoilations(datefile)
    expect(output).not.toEqual(null)
    expect(output.length).toEqual(10)
  })
})
describe('File created according date', () => {
    test('should return data', () => {
      const readFile = new TrafficVoilationManagement()
      const date = readFile.sortDate([])
      if (fs.existsSync('2020')) {
        expect(date).toContain('./2020.txt')
        console.log('file is created by date 2020')
      }
      if (fs.existsSync('2021')) {
        expect(date).toContain('./2021.txt')
        console.log('file is created by date 2021')
      }
      if (fs.existsSync('2022')) {
        console.log('file is created by date 2022')
        expect(date).toReturn()
      }
    //   expect(fs.existsSync('./2020.txt')).toBe(true)
    //   expect(fs.existsSync('./2021.txt')).toBe(true)
    //   expect(fs.existsSync('./2022.txt')).toBe(true)
    })
})
describe('Return Mock data to test the function', () => {
    test('should return data', () => {
      const readFile = new TrafficVoilationManagement()
      const file  = readFile.storeViolationByYear("year", "voilations")
    })
})