/* eslint-disable jest/expect-expect */
import { vechile } from "../../src/collection/find.js";
import { vechimethod } from "../../src/collection/finding.js";

describe('find function', () => {
    it('test sample for result 5', async () => {
      const samp = [
        new vechile(' car', 10000),
        new vechile(' bike', 15000),
        new vechile(' auto', 20000),
        new vechile(' bycycle', 25000),
        new vechile(' airplane', 300000),
        new vechile(' tempo', 300000)  
      ];
      const vechiles = new vechimethod(samp);
      vechiles.learnfind();
    });
  });