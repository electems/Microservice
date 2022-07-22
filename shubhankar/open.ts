import { readFileSync, promises as fspromise } from "fs";
import { dirname, join } from "path";

function syncReadfile(filename: string){
    const result = readFileSync(join(__dirname,filename),'utf-8' );

    console.log(result);
    return result;

}
syncReadfile('./run.txt');