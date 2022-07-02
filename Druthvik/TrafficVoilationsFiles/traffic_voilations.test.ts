import { TrafficVoilationManagement } from './traffic_voilations'
import * as fs from 'fs'
const datefile = fs.readFileSync('./hi.txt').toString()

// test('should return data', () => {
//   const readFile = new TrafficVoilationManagement()
//   readFile.loadVoilations('../TrafficVoilationsFiles/')
//   const readData = fs.readFileSync(datefile)
//   expect(fs.readFileSync).toBeCalled()
//   expect(readData).toBe(datefile)
// })
// test('should return data', () => {
//   const readFile = new TrafficVoilationManagement()
//   readFile.loadVoilations('voilation_list_acc_to_date.txt')
//   const file = 'voilation_list_acc_to_date.txt'
//   TrafficVoilationManagement.fs = {
//     readFileSync: () => file,
//   } as any
//   const readData = new TrafficVoilationManagement()
//   expect(readData).toBe(file)
// })
// jest.mock('fs')
// test('should return data', () => {
//   expect(jest.isMockFunction(fs.readFileSync)).toBeTruthy()
//   fs.readFileSync('test string')
//   require('./traffic_voilations/datelist.txt')
// })
//
// }
// describe('Return Mock data to test the function', () => {
//   it('should return the test data', () => {
//     const readFile = new TrafficVoilationManagement()
//     const ReadData = readFile.loadVoilations(datefile)
//     expect(ReadData).toBe(datefile.toString())
//   })
// })
// it('sort date', () => {
//   const date = new TrafficVoilationManagement()
//   expect(date.sortDate).toBe('2022')
// })
it('testfile', async() =>{
  const readFile = new TrafficVoilationManagement()
  readFile.loadVoilations(datefile)
  const reads = new 
})
