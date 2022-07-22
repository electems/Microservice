import { write } from "fs";

const{promises: fs2}= require ("fs");

const writes =async () => {
 await fs2.appendFile('raju.txt' ,'\n this is the update of that work ' )    
}
writes()
