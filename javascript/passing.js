// //passing by value
// var a=10,b;
// b=a;
// a=20;
// console.log(a);
// console.log(b);

// //passing by referencce
// var c={x:9},d;
// d=c;
// d.x=23;
// console.log(c);
// console.log(d);

//passing by value another example
// function changevalue(pasvalue){
//     console.log("in changing before");
//     console.log(pasvalue);

//     pasvalue=39;
//     console.log("after : "+pasvalue);
// }
// value=45;
// changevalue(value);
// console.log('after change: '+value);

//passing by refference another example
function changevalue(objvalue){
    console.log("in changing before");
    console.log(objvalue);

    objvalue.x=39;
    console.log("after : "+objvalue.x);
}
value={x:45};
changevalue(value);
console.log('after change: '+value.x);