const car = [
  { name: 'bmw', color: 'blue' },
  { name: 'audi', color: 'blue' },
  { name: 'honda', color: 'white' },
  { name: 'benz', color: 'silver' },
  { name: 'ferrari', color: 'red' },
  { name: 'lambo', color: 'yellow' },
]

const filter = car.filter(function (student: {
  name: string
  color: string
}): boolean {
  return student.color === 'blue'
})

console.log(filter)
