var people=[
    {name: 'raju', age:26, height:6.3},
    {name: 'ramesh',age:24,height:5.5},
    {name: 'ram', age:19,height:4.5},
    {name:'manju',age:15,height:7.6},
    {name:'mahesh',age:76,height:5.6},
]
var find=people.find(function(newe){
    if(newe.age>25){
        console.log(newe.name);
        return newe.name;
        
    }
    
})
console.log(find);
