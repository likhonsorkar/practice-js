const time = new Date();
// console.log(time);

console.log("first");

setTimeout(function(){
    console.log("second");
},4000);

setInterval(() => {
    console.log("Interval time")
}, 2000);
console.log("third");
console.log("fourth");
console.log("fifth");