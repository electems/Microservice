import { vechile } from "./find.js";

export class vechimethod {

    vech: vechile[] = [];
    constructor(vechile: vechile[]) {
  
      this.vech = vechile;
  
    }
    learnfind(): vechile[] {
      const find = this.vech.filter(function (_vechi: {
        name: string;
        rate: number;  
      }): string | void {

        if (_vechi.rate < 25000) {
          return vechile.name
        }
      })
      return find;
    }
  }