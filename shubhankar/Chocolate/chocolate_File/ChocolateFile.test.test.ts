import { Choco } from '../Model/chocolate';
import {allChocolate} from './ChocolateFile'

const ChocolateInfo: Choco[] =[
    { "name": "Milkeybar", "price":5, "quantity": 20  },
    { "name": "applebyte", "price":2 ,  "quantity": 50},
    { "name": "mangobyte", "price":1 ,  "quantity": 100},
];

describe('Return the chocolate ', () => {
    test('should return data', () => {
      const chocolateQuantity = new allChocolate(ChocolateInfo);
      chocolateQuantity.getChocolateQuantity(100)
      expect(ChocolateInfo[0].quantity).toBe(20)
      expect(ChocolateInfo[1].quantity).toBe(50)
      expect(ChocolateInfo[2].quantity).toBe(100)
      });
    });

    describe('Return the chocolate ', () => {
      test('should return data', () => {
        const ChocolateData: Choco[] =[
          { "name": "mangobyte", "price":1 ,  "quantity": 100},
          { "name": "applebyte", "price":2 ,  "quantity": 50},
          { "name": "Milkeybar", "price":5, "quantity": 20 },
      ];
      
       const chocolatesort = new allChocolate(ChocolateData);
        chocolatesort.Sortbyquantity();
        expect(ChocolateData[0].name).toBe("mangobyte")
        expect(ChocolateData[1].name).toBe("applebyte")
        expect(ChocolateData[2].name).toBe("Milkeybar")
        });
      });
  
   
