import * as fs from 'fs';
import { text } from 'stream/consumers';

let fileContent = 'im working in electems';
let message = fs.writeFileSync('run.txt',fileContent);

function copyContent(fileName:string,dest:string):boolean{
    try{
        fs.copyFileSync(fileName, dest);
        console.log(dest);
        return true;
    }catch(err){
        return false;
    }
console.log(copyContent('run.txt','destination.txt'));
}