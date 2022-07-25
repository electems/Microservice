import { Student } from './reducee';
import { ReduceOp } from './reduce1';

const ReduceMethod:Student[]=[
    {"name":"Munna","age":10},
    {"name":"Munni","age":20},
    {"name":"Toni", "age":30},
    {"name":"maruthi","age":40},
    {"name":"arnoraj","age":50} 
]

describe('to get filter records', () => {
    test('Student with different age', async () => {
        expect(ReduceMethod[2].age).toBe(30);
        expect(ReduceMethod[3].age).toBe(40);
        expect(ReduceMethod[4].age).toBe(50);
    
      });
})

//`npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`