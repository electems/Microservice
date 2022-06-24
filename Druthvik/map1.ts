const tasks = [
  {
    name: 'Write for Envato Tuts+',
    duration: 120,
  },
  {
    name: 'Work out',
    duration: 60,
  },
  {
    name: 'Procrastinate on Duolingo',
    duration: 240,
  },
]
const helo = function (
  _tasks: any,
  callback: (arg0: { name: string; duration: number }) => any,
) {
  const new_array: any[] = []

  tasks.forEach(function (element, index, array) {
    new_array.push(callback(element))
  })

  return new_array
}
console.log(helo)
