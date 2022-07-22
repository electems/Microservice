import { promises as fspromise, readFileSync } from 'fs';
import { join } from 'path';
function SyncReadFile(filename: string){
    const result= readFileSync(join(__dirname,filename))

    console.log(result);
    return result;

}
SyncReadFile('raju.txt');