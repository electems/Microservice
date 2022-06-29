function timestart(that: { value: Date; }) 
{
    var x =  new Date();
    that.value = x;
	
}
function timeend(that: { value: Date; }) 
{	
    var y = new Date()
    that.value = y;
}

function duration()
{
    var z = x - y;
    alert("duration=" + z)

}