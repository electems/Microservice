const { promises: fs1 }=require("fs");
const write = async() => {
    await fs1.appendFile("run.txt", '\n im working in electems') 
}
write()