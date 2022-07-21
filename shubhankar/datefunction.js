function Givedate(date) {
    var hours = date.getHours();
    var Minutes = date.getMinutes();
    var second = date.getSeconds();
    console.log('the current hours is' + hours + 'the current minutes is ' + Minutes + 'the current sec is' + second);
}
var dt = new Date();
Givedate(dt);
