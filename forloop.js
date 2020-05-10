var rows=5;
var str;
var arr = new Array();
var bewarr = ['Apple', 'Mawa', 'Lauki'];
for(var i=1;i<=rows;i++)
{
        // arr.push('*');
        arr.push(i);
console.log(arr.join(' '));
}
for(myfruits in bewarr){ //use of in
        // console.log(bewarr[myfruits]);
}
console.log(bewarr.join(', '));

for(myfruits of bewarr){//use of 'of'
        console.log(myfruits);
}
mynew=[100, 200, 300];
let mynumber = arr.concat(6, mynew);
console.log(mynumber);