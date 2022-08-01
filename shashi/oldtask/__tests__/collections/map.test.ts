/* eslint-disable jest/expect-expect */
import { cars } from "../../src/collection/mapping.js";
import { maps } from "../../src/collection/maps.js";

describe('mapping function',() =>
{
    it('test sample for result 5',async () => {
    
        const veh = [
          new cars('abcd',138762371),
          new cars('affaf',7836472635),
          new cars('benz',7836472635),
          new cars('audi',7836472635),
          new cars('maruthi',7836472635)
        ];
      
        const learning = new maps(veh);
       learning.learnFilter()
      });
    });