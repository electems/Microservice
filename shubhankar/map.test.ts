import { Workers } from './map1';
import { ReduceOp } from './reduce1';

const MapMethod:Workers[]=[
    {"id":1,"name":"Munna","salary"},
    {"name":"Munni","age":20},
    {"name":"Toni", "age":30},
    {"name":"maruthi","age":40},
    {"name":"arnoraj","age":50} 
]

describe('to get filter records', () => {
    test('Employee with different age', async () => {
        expect(filterMethod[2].name).toBe("Toni");
        expect(filterMethod[3].name).toBe("maruthi");
        expect(filterMethod[4].name).toBe("arnoraj");
      });
})
