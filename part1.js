
//?variables
//   var a = 15; //!anytime multiple  variables are allow   
//   const b = 20;//! in const variable have declare once ,after value have not changable
//   let c = 30;//!in let once variable have declare ,then that  fix,variable have not change
//   const a = 20;



// var age = 18;

// if(age >= 18){
//   console.log("You are eligible to vote");
// }else{
//     console.log("You are not eligible to vote");
// }


//  var a = 1;

//  switch(a){

//     case 1:
//         s = 15 + 20;
//         console.log(s);
//         break;
//     case 2:
//         console.log("two");
//         break;
//     case 3:
//         console.log("three");
//         break;
//     default:
//         console.log("invalid input");
//  }



//?for
// for(var i = 0 ; i < 50 ; i++){
//     console.log("hello ceo");
// }

//?while
// let i = 20;

// while(i >= 10 ){
//     console.log(i);
//     i--;
// }


//?do while
// let i = 1;

// do{    first time execute anfer condition true then run otherwise not
//     console.log(i);
//     i++;
// }while(i <= 20);


//?normal function

// function name(){
//     console.log("hello fenil");
// }

// name();

//?with parameter
// function name(a){
//     console.log("hello" + a);
// }

// name("  mr founder");

// function sum(a,b){
//     console.log(a+b);
// }

// sum(33,33);


//?arrow function

// let sum = (a,b) => a+b; 

// console.log(sum(2,5));

//?arrays

// let student = ["fenil" ,"nirmit","abhi"];
// console.log(student);

// let num = [33,55,44];
// console.log(num);
// console.log(num[2]);
// console.log(num.length);
//?


//?datatypes
//! premitive datatype
//* 1.Number
    //  let num = 20;
    //  console.log(typeof num);
//* 2.string
    //  let str = "hello world";
    //  console.log(typeof str);
//* 3.boolean
    //  let boo = true;
    //  console.log(typeof boo);
//* 4.null
    // let nul = null;
    // console.log(typeof nul);
//* 5.undefined
    //    let a;
    //    console.log(a);                                      

//!non premitive datatype
//* 1.object
//* 2.array
//* 3.function

//?type conversion
// result = 3+"hello";  
// result = 3-"hello";  
// result = '3'+"hello";  
// result = -33.3033;
// result = parseFloat(result);
// console.log(result);
// console.log(typeof result);

//?operators

//!arithmetic operator(+, - , * , / , %)

// let a = 1;
// console.log(++a); prefix and postfix

//!comparison operator(==, !=,>=,<=)
// a = 5;
// b = 10;

// console.log(a==b);

// console.log(a!=b);

// console.log(a>=b);

// console.log(a<=b);
//!logical operator(a,b,a||b or , a && b and,!a not)

//!conditional

// let age = 18;

// if(age >= 18){
//     console.log("you are eligibe");
// }else{
//     console.log("you are not eligible");
// }


// let ch=1;

// switch(ch){
//     case 1:
//         console.log("one");
//         break;
//     case 2:
//         console.log("two");
//         break;
//     case 3:
//         console.log("three");
//         break;
//     default:
//         console.log("invalid input");
// }


// for(var i=0;i<=10;i++){
//     // console.log("2 * " +i+ "=" + 2*i);
//     // console.log(`2 * ${i} = ${2*i}`);  //back
// }

// var i = 1;
// while(i<=10){
//     console.log(i);
//         i++;
// }

// function name(){
//     console.log("hello");
// }

// name();

// let a=5;

// function local(){
//     let b=3;

//     console.log(b);
// }

// local();

// console.log(a);

// let name = ["fenil","dd","ff"];
// console.log(name);

// let name = ["fenil","dd","ff"];
// // name.push("gg");
// // name.unshift("gh");
// name.splice(1,2,"fff");

// // console.log(name.length);
// console.log(name);

// let num = [10,20,30,40,10,50];

// for(let i = 0 ; i< num.length ; i++){
//     console.log(num[i]);
// }

// num.forEach((val,index,array) => {
//   console.log(val + " " +index+ " " +array);
// })

// let a = num.map((val,index) =>{
//     return val;
// });

// console.log(a);

// let num2 = [11,12,13,14,15];

// console.log(num.concat(num2));

// console.log(num.indexOf(30));
// // console.log(num.reverse());
// console.log(num.sort());
// let a = num.slice(1,4); //display specific
// let b = num.splice(1,4); //remove specific

// console.log(b);
// console.log(a);

// console.log( typeof num.toString());

// let a = num.filter((val,index,arr) =>{
//    if(val >= 10 && val <= 25){
//     return val;
//    }
// })
// let a = num.findIndex((val,index) =>{
    
//      return val == 10;
    
//  })

// let a = num.findLastIndex((val,index) =>{
    
//     return val == 10;  //lastindex ise when two values are same in array
   
// })
// console.log(a);

// let num = '10,20,30';

// let arr = num.split(',');
// // arr.forEach(element => {
// //     console.log(element);
// // })

// let join = arr.join("and");
// console.log(join);


//for in and for of
// let arr = [10,20,30,40];

// // for(let arf in arr){  //index value print thorugh value
// //     console.log(arr[arf]);
// // }
// for(let arf of arr){
//     console.log(arf); //directly access
// }

let arr = [
    ["fenil",20],
    ["abhi",30],
    ["dd",24],
]
// console.log(arr[1][0]);

// for(let i = 0;i<arr.length;i++){
//     {
//         for(let j = 0;j<arr[i].length;j++){
//             console.log(arr[i][j]);
//         }
        
//     }
// }

// arr.forEach(data => {
//  data.forEach(val =>{
//     console.log(val);
//  })
// });

// for(let ar of arr){
//     for(i of ar){
//         console.log(i);
//     }
// }

// arr1 = ["fenil",33,true];

// arr1.push("fs");
// arr2 = arr1;

// console.log(arr1);
// console.log(arr2);

// let arr1 = ["fenil",33,true];
// // let arr2 = arr1.slice(0).concat(["item"]);
// //other way
// let arr2 = [...arr1];

// arr1.push("fs");


// console.log(arr1);
// console.log(arr2);

//!array destructing

// let arr1 = ["fenil","fs"];

// let item1 = arr1[0];
// let item2 = arr1[1];

// console.log(item1)
// console.log(item2)

//other way

// let arr1 = ["fenil","fs","fgh","jkl"];

// let [item1,item2,...item3] = arr1;

// console.log(item1)
// console.log(item2)
// console.log(item3)

//!asynchronous
//used for wait and set specific time for run a specific code

// console.log("this");
// // console.log("is");
// setTimeout(()=>{
//     console.log("is");
// },2000);

//other way

// setTimeout(fun,2000);

// function fun(){
//     console.log("is");
// }
// console.log("asynchronous");

//!call back function


// function fun(val){
//     console.log(val);

// }

// function add(a,b,callback){
//     let sum = a+b;
//     callback(sum);
// }

// add(5,10,fun);


//!callback hell

//simple call back

// function loadingdata(){
//     setTimeout(()=>{
//         console.log("loading...");
//     },1000); 
// }

// function collectingdata(){
//     setTimeout(()=>{
//         console.log("collecting data...");
//     },2000); 
    
// }

// function approvingdata(){
//     setTimeout(()=>{
//         console.log("approving data...");
//     },3000);
// }

// function approved(){
//     setTimeout(()=>{
//         console.log("approved...");
//     },4000);
// }

// loadingdata();
//  collectingdata();
//  approvingdata();
//  approved();

 //other way -- for more than function

// function loadingdata(callback){
//     setTimeout(()=>{
//         console.log("loading...");
//         callback();
//     },1000); 
// }

// function collectingdata(callback){
//     setTimeout(()=>{
//         console.log("collecting data...");
//         callback();
//     },2000); 
    
// }

// function approvingdata(callback){
//     setTimeout(()=>{
//         console.log("approving data...");
//         callback();
//     },3000);
// }

// function approved(){
//     setTimeout(()=>{
//         console.log("approved...");
        
//     },4000);
// }

// loadingdata(function(){
//     collectingdata(function(){
//         approvingdata(function(){
//             approved();
//         });
//     });
// });
 

//!solution callback hell -- promise

// function fun(task){
//     return new Promise((resolve,reject)=>{
//         if(task){
//             resolve("completed");
//         }else{
//             reject("not completed");
//         }
//     })
// }

// let onresolve = (res)=>{
//     console.log(res);
// }

// let onreject = (res)=>{
//     console.log(res);
// }

// fun(false).then(onresolve).catch(onreject);

// //!solution
//  function loadingdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("loading..."); 
//             resolve();
//         },1000); 
//     }) 
//     }
    
//     function collectingdata(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log("collecting data...");
//                 resolve();
//             },2000); 
//         })  
//     }
    
//     function approvingdata(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log("approving data...");
//                 reject('error:not fulfilled');  //realtime use if-else condition 
//             },3000);
//         })
        
//     }
    
//     function approved(){
//         setTimeout(()=>{
//             console.log("approved...");
            
//         },4000);
//     }


//     loadingdata().then(collectingdata).then(approvingdata).then(approved).catch((err)=>{
//         console.log(err)
//     })
    
//!promises for better solution - async-await


// function loadingdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("loading..."); 
//             resolve();
//         },1000); 
//     }) 
//     }
    
//     function collectingdata(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log("collecting data...");
//                 resolve();
//             },2000); 
//         })  
//     }
    
//     function approvingdata(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log("approving data...");
//                 reject('error:not fulfilled');  //realtime use if-else condition 
//             },3000);
//         })
        
//     }
    
//     function approved(){
//         setTimeout(()=>{
//             console.log("approved...");
            
//         },4000);
//     }

// async function ex(){
    // await loadingdata();
    // await collectingdata();
//     await approvingdata();
//     await approved();
// }

//1
// ex().catch((err)=>{
//     console.log(err)
// });

//2
// ex().then(collectingdata).catch((err)=>{
//     console.log(err)
// });