var arr = [1, 2, 3, 4];
var reduce = arr.reduce(function (totalval, curval) {
    return totalval + curval;
}, 0);
console.log(reduce);
