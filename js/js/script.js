"use strict"
// let abc="common man";
// document.write(abc);

//by using "use strict" if the undeclared variable will not dispaly 
//if we don't use it undeclared variable will work 
// abc=10;
// document.write(abc);

//let scope is local
// if(5>4){
//     let a=109;
// }
// document.write(a);


//var scope is global
// if(5>4){
//     var a=109;
// }
// document.write(a);

//all the operator are same as in php except exponential
// let abc=2;
// let xyz=5;
// let res=abc**xyz;
// document.write(res);


//exponential equalto
// let xyz=5;
// xyz **= 6;
// document.write(xyz);

//typeof
// let ab34="strong will power"
// document.write(typeof ab34);

//break and continue
// for(let i=0; i<10; i++){
//     document.write(i);
//     if(i==3)
//         continue;
//     document.write(" space ");
// }


//for of used in arrays
// const xyz=[1,3,4,6];
// for(let nums of xyz){
//     document.write(nums);
// }


//for in used in objects
// const obj={'george':2001,'modi':2015,'gandhi':1947}
// for(let people in obj){
//     document.write(people + " was elected in year " +obj[people] + ", ");
// }


//forEach in js
// const f34=[3,5,6,8];
// f34.forEach(function(ele){
//     document.write(ele + " ");
// });


//functions in js
// function mul(a,b=2){
//     return a*b;
// }
// let result=mul(4,9);
// let res2=mul(3);
// document.write(result);
// document.write(" " +res2);


//anonomus function in js
// let haha=function (a){
//     return a**a;
// }
// let res=haha(3);
// document.write(res);


//
// let agt=function(p){
//     p=p*5;
//     return p;
// };
// let p=10;
// agt(p);
// document.write(p);




//arrow function
// let mul=(a,b)=>{
//     let x=a+b;
//     return x;
// };
// document.write(mul(3,5)+ "<br>");
// 
//
// let ght=(h,y)=>h/y;
// document.write(ght(3,2) + "<br>");

// 
//arrow function with braces and single value and no return value
// let g=x => x**x;
// document.write(g(4));


//objects
//using let
// let dog={
//     breed:"golden",
//     height: "4.6 ft ",
//     age:5,
//     display:function(){
//         document.write(this.breed + this.height + this.age);
//     }
// };
// document.write(dog.breed);//or
// document.write(dog['height']);


//using new object
// let dog= new Object();
//     dog.breed="golden";
//     dog.height= "4.6 ft ";
//     dog.age=5;
//     dog.display=function(){
//         document.write(this.breed + this.height + this.age);
//     }
//     let dog2= new Object();
//     dog2.breed="pug";
//     dog2.height= "1.6 ft ";
//     dog2.age=3;
//     dog2.display=function(){
//         document.write(this.breed + this.height + this.age);
//     }

// document.write(dog.breed + "<br>");//or
// document.write(dog2["breed"] + dog2['age']);


//using functions
// function car(model,year){
//     this.model=model;
//     this.year=year;
//     this.display=function(){
//         document.write(this.model + this.year);
//     };
// }
// let c= new car("nissan",2014);
// document.write(c.model + c.year);


//using class
// class car{
//     constructor(model,year){
//         this.model=model;
//         this.year=year;
//     }
    
//     display=function(){
//         document.write(this.model + this.year);
//     };
// }
// let c= new car("ford",1969);
// document.write(c.model + c.year);


//arrays
// const arr=['html','css',3059];
// arr.forEach(function(ele){
//     document.write(ele+" ");
// });
// arr.push("js");
// arr.forEach(function(ele){
//     document.write(ele+" ");
// });
// arr.pop();
// arr.forEach(function(ele){
//     document.write(ele+" ");
// });
// //using for-of
// for(let ght of arr){
//     document.write(ght);
// }

// //MAP FUNCTION
// const abc=[3,5,7];  
// let sqr=abc.map(x => x*x);
// sqr.forEach(function(kiu){
//     document.write( "<br>" + kiu);
// });


//filter function
// const abc=[1,2,4,6,3,5,7];  
// let even=abc.filter(x => x%2 == 0);
// even.forEach(function(kiu){
//     document.write( "<br>" + kiu);
// });


//rest parameter
// function calcu(...args){
//     let sum=0;
//     args.forEach(function(ele){
//         sum += ele;
//     });
//     return sum;
// }
// let s=calcu(2,4,5,6,7);
// document.write(s + "<br>");
// let g=calcu(4.5,6,6.77,7,9);
// document.write(g);
// function cal(a,b,...args){
//     let sum=0;
//     document.write("without a and b "+ a +" " +b);
//     args.forEach(function(ele){
//         sum += ele;
//     });
//     return sum;
// }
// let s=cal(2,4,5,6,7);
// document.write("</br>" + s + "<br>");