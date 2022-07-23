import { Student } from '../../src/collection/student.js';
import { CollectionTraining } from '../../src/collection/collectiontraining.js';

describe('filter function', () => {
  // Assert greeter result
  it('test sample for result 5',async () => {
    
    const students = [
      new Student('abcd','computer')
    ];
  
    const learning = new CollectionTraining(students);
    learning.learnFilter()
  });
});

