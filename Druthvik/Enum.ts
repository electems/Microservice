enum RGBColor {
  Red,
  Green,
  Blue,
}
console.log('RGBColor:', RGBColor)
console.log('RGBColor.Green:', RGBColor.Green)

let colorBlue: RGBColor = RGBColor.Blue
console.log('colorBlue:', colorBlue)

enum Cities1 {
  Mumbai = 10,
  Delhi = 20,
  Kolkata = 30,
  Chennai = 40,
  Bangalore = 50,
}
console.log('Cities:', Cities1)
console.log('Bangalore:', Cities1.Bangalore)

enum Cities2 {
  Mumbai = 'M',
  Delhi = 'D',
  Kolkata = 'K',
  Chennai = 'C',
  Bangalore = 'B',
}
console.log('Cities:', Cities2)
console.log('Bangalore:', Cities2.Bangalore)
