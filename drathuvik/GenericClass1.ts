interface IKeyValueProcessor<T, U> {
  process(key: T, val: U): void
}

class kvProcessor<T, U> implements IKeyValueProcessor<T, U> {
  process(key: T, val: U): void {
    console.log(`Key = ${key}, val = ${val}`)
  }
}
//objname:interfacename                            class name
let proc: IKeyValueProcessor<number, string> = new kvProcessor()
proc.process(1, 'Bill') //Output: key = 1, value = Bill

let pro = new kvProcessor<number, string>()
pro.process(2, 'hi')
