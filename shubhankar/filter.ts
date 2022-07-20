const car = [
    {name:'bmw', color:'blue'},
    {name:'audi', color:'pink'},
    {name:'honda', color:'yellow'},
    {name:'verena', color:'mangogreen'} 
]


const filter =car.filter(function (boy:{
             name: string
             color:string
}):boolean{
    return boy.color === 'mangogreen'
})

console.log(filter)