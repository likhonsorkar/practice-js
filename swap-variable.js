//solution 1
console.log('\n solution 1');
var a = 70;
var b = 100;
// bfore swap 
console.log("befor swap a =",a, "b =",b);
// after swap
var temp = a;
a = b;
b = temp;
console.log("after swap a =",a, "b =",b);

// solution 2
console.log('\n solution 2');

var x = 150;
var y = 75;
// bfore swap 
console.log("befor swap x =",x, "y =",y);
// after swap 
[x,y] = [y,x];
console.log("after swap x =",x, "y =",y);
