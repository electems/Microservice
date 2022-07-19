import { sample } from '../src/main.js';

describe('sample function', () => {
  // Assert greeter result
  it('test sample for result 5',async () => {
     jest.setTimeout(20000)    
    const hello = sample(10,5);
    expect(hello).toBe(`Result: 5`);
  });

  it('test sample for result 0',async () => {
    jest.setTimeout(20000)    
    const hello = sample(5,5);
    expect(hello).toBe(`Result: 0`);
  });

  it('test sample for result 10',async () => {
    jest.setTimeout(20000)    
    const hello = sample(20,10);
    expect(hello).toBe(`Result: 10`);
  });
});
