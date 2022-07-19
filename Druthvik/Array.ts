const arr4 = [
  { id: '1', name: 'A' },
  { id: '2', name: 'B' },
  { id: '3', name: 'C' },
  { id: '4', name: 'D' },
]
const arr2 = [
  { id: '1', name: 'A', state: 'healthy' },
  { id: '3', name: 'C', state: 'healthy' },
]
const filterByReference = (arr4: any[], arr2: any[]) => {
  // eslint-disable-next-line no-irregular-whitespace
  let res = []
  res = arr4.filter((el) => {
    return !arr2.find((element) => {
      return element.id === el.id
    })
  })
  return res
}
console.log(filterByReference(arr4, arr2))
