import { format } from "path";

function padto2digits(num: number){
    return num.toString().padStart(2,'0');
}

function findDate(date: Date){
    return (
        [
        date.getFullYear(),
        date.getMonth()+1,
        date.getDay(),
        ].join('-')+'  '+

        [
            padto2digits(date.getHours()),
            padto2digits(date.getMinutes()),
            padto2digits(date.getSeconds()),
        ].join(':')+'   '+
        [
             padto2digits(date.getMilliseconds()),
             padto2digits(date.getTimezoneOffset()),
        ]
    );
}
const dat= findDate(new Date) 
console.log(dat);