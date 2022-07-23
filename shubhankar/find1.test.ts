import { Findclass } from "./finclass";
import { findoperation } from "./find1";


const findMethod:Findclass[]=[
    {"vehiclename":"honda",   "price":10000},
    {"vehiclename":"thar",   "price":20000},
    {"vehiclename":"alto",   "price":30000},
    {"vehiclename":"maruthi",   "price":40000},
    {"vehiclename":"suzuki",   "price":50000} 
]

describe('sample function', () => {
    test('chocolate with differnt quantity', async () => {
        expect(findMethod[0].vehiclename).toBe("honda");
      });
})

