import { ChocolateList } from "../models/chocolate";

export class ChocolateQantity{
    listOfChocolate:ChocolateList[]=[]

    constructor(listOfChocolate:ChocolateList[]){
        this.listOfChocolate = listOfChocolate;
    }

    checkofquantity(amount:number){
        let chocolatePrice = 0;
        for (const chocolate of this.listOfChocolate) {  
            chocolatePrice = chocolate.price   
            chocolate.quantity = amount/chocolatePrice
            }
          }

          sortByQuantity() {       
                return this.listOfChocolate.sort(this.ChocolateQuantityCheck)
              }
              
              ChocolateQuantityCheck(a:ChocolateList, b:ChocolateList) {
                if (a.quantity > b.quantity) {
                   return 1;
                }
                if (a.quantity < b.quantity) {
                   return -1;
                }
                return 0;
              }
              
        }

    