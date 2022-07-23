import { Reducee } from "../../src/collection/reduce.js";
import { Reduction } from "../../src/collection/reduction.js";

describe('reduce function', () => {
    it('test sample for result 5', async () => {
      const samp = [
        new Reducee(100),
        new Reducee(1500),
        new Reducee( 200),
        new Reducee(250),
        new Reducee( 300),
        new Reducee(300)  
      ];
      const okay = new Reduction(samp);
      okay.method();
    });
  });