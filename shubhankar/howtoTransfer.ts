import * as fs from 'fs';
import { text } from 'stream/consumers';
import { runInContext } from 'vm';
//it overrides the previous text of raju.txt to new one
let filecontent = 'this is how the work have to done'

let message =fs.writeFileSync('raju.txt',filecontent);

function copycontent(filename: string , dest: string){
    try{
        fs.copyFileSync(filename,dest);
        console.log(dest);
        return true;
    }catch(err){
    return false;
    }
    console.log(copycontent('raju.txt', 'rahul.txt'));
}