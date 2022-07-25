import{Workers} from "./map1"
import {Mapoperation} from "./map2"

const MapMethod:Workers[]=[
    { id: 20, name: 'Ajay', salary:30000 },  
   { id: 24, name: 'Vijay', salary:35000 },  
   { id: 56, name: 'Rahul', salary:32000 },  
   { id: 88, name: 'Raman', salary:38000 }
]

describe('to get Map records', () => {
    test('Workers Salary ', async () => {
        expect(MapMethod[0].salary).toBe([30000]);
        expect(MapMethod[1].salary).toBe([35000]);
        expect(MapMethod[2].salary).toBe([32000]);
        expect(MapMethod[3].salary).toBe([38000]);
    
      });
})