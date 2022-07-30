import { Choco } from "../Model/chocolate";
export class allChocolate{
    chocolatelist:Choco[]=[]

constructor(chocolatelist:Choco[]) {
    this.chocolatelist= chocolatelist;
  }

  getChocolateQuantity(Myprice: number){
      let chocolateAmt= 0;
      for (const chocolate of this.chocolatelist) {
        chocolateAmt = chocolate.price;
         chocolate.quantity = Myprice / chocolateAmt;
         
      }
    }
     Sortbyquantity(){
      return this.chocolatelist.sort(this.Sortquantity);
    }
    
    Sortquantity(a: Choco , b: Choco){
      if ( a.quantity< b.quantity ) {
        return 1;
      }
      if (a.quantity  > b.quantity ) {
        return -1;
      }
      return 0;
    }
  }

  