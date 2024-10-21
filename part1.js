
//?variables
//   var a = 15; //!anytime multiple  variables are allow   
//   const b = 20;//! in const variable have declare once ,after value have not changable
//   let c = 30;//!in let once variable have declare ,then that  fix,variable have not change
//   const a = 20;






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

// let arr = [
//     ["fenil",20],
//     ["abhi",30],
//     ["dd",24],
// ]
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


//!object

// let obj = {
//     name:"fenil",
//     age:20,
//     "lastname":"sheadiya",
//     fun: function(){
//         console.log("this is function")
//     },
//     arr:[20,30,40,50]
// }

// console.log(obj["lastname"]);
// console.log(obj.age);
// obj.fun();
// obj.key="added"
// console.log(obj.arr);
// console.log(obj);

// let a ="key2";
// obj[a]="item2"

// for(let i in obj){
//     console.log(obj[i]);
// }

// for(let i of Object.keys(obj)){
//     console.log(i);
// }

// for(let i of Object.keys(obj)){
//     console.log(obj[i]);
// }


//!array of object

// let arr2 =[
//     {name:"fenil",age:20},
//     {name:"sheadiya",age:22},
//     {name:"rahul",age:21}
// ]
// console.log(arr2);

// for(let i in arr2){
//     console.log(arr2[i]);   
// }
// let[{name},item2]= arr2;
// console.log(name);
// console.log(item2);


//!function in function

// function fun(){
//     console.log("function 1");
//     function fun2(){
//         console.log("function 2");
//     }
//     fun2();
// }
// fun();

//!lexical scope-- solution

// function fun(){
//     var a = 1; //?lexical scope -- its accessed by second function
//     console.log("function 1" +a);
//     function fun2(){
//         console.log("function 2" +a);
//     }
//     fun2();
// }
// fun();


//!debugger
//?error correction and find where code break

// function fun(){
//     debugger;
//     for(let i=0;i<=8;i++){
//         console.log(i);  
//     }
// }
// fun();

//!sets == simmilar to array

// const arr =[10,20,30,40,50,50];
// console.log(arr.length);

// //?unique value doesn't repeated
// const s = new Set([10,20,30,40,50,50,50]);
// s.add(70);
// s.add("fenil")  
// console.log(s);

// //? other way to find size of set
// length=0;
// for(let element of s){
//     length++;
// }
// console.log(length);

//!map -- similar to object

// var map = new Map([[1,"one"],
// ["fname","fenil"],
// ["number",[1,2,3,4,5]]])

// console.log(map.get(1));

// console.log(map);

//set values
// var map2=new Map();
// map2.set("fname","fenil")
// console.log(map2);

//!this -- specific this value
// var obj={
//     name:"fenil",
//     age:20,
//     fun:function(){
//         console.log(this.name);
//     }
// }
// obj.fun();

// function fun(){
//     console.log(this);
// }

// fun();

//!new

// function fun(){
//     let fname = "fenil";
//     this.fname = fname;
// }

 // console.log(new fun());
// var obj = new fun();  
// console.log(obj.fname);

 
//!constructuor function == target
//?technically are reguar function
//?they are nme with capital letter first
//?they should be executed only with "new" operator

// function user(name){
//     if(!new.target){
//         return new user(name)
//     }
//     this.name=name;
// }
// let person = user("fs");
// let person = new user("fs"); //other
// console.log(person.name);


//!symbol
//?a symbol represents a unique identifier

// let sym = Symbol("id");
// console.log(sym.toString());
// console.log(sym.description);

// let sym = Symbol("id");
// let sym1 = Symbol("id");

// console.log(sym === sym1);

// let id = Symbol("id");

// let obj = {
//     name:"fenil",
//     // [id]:33
// }

//other way 
// obj[id]=2; //outside declare

// console.log(obj);
// console.log(obj.name);
// console.log(obj[id]);



//!proto 

//?__proto__
//references

// var obj = {
//     fname :"fenil"
// };

// var obj2 = {
//     lname:"sheladiya"
// }

// obj2.__proto__ = obj; //reference

// console.log(obj2.fname);

//other way
// var obj ={
//     name : "fenil"
// };

// obj2 = Object.create(obj);
// obj2.lname="sheladiya"
// console.log(obj2.name);
// console.log(obj2.lname);

//!prototype

// function Person(name,age){
//     let person = Object.create(obj)
//     person.name = name;
//     person.age = age;
//     return person
// }

// var obj = {
//     greet () {
//         console.log('hello ${this.name}')        
//     }
// }

// let user = Person("fenil",33)
// console.log(user);
// user.greet()

// console.log(Person.prototype.toString);

//?other better way


// function Person(name,age){
//     let person = Object.create(Person.prototype)
//     person.name = name;
//     person.age = age;
//     return person
// }


// Person.prototype.greet = function() {
//         console.log('hello ${this.name}')        
//  }


// let user = Person("fenil",33)
// console.log(user);
// user.greet()

// console.log(Person.prototype);

//?simple use new keyword

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }


// Person.prototype.greet = function() {
//         console.log('hello ${this.name}')        
//  }


// let user = new Person("fenil",33)
// console.log(user);
// user.greet();

//!class = is a better way


// class person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log('hello ${this.name}');
//     }
// }

// let user = new person("fenil",33)
// console.log(user);
// user.greet();

// class user{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     sayhi(){
//         console.log("hello" + this.name);
        
//     }
// }

// let emp = new user("fenil",33);
// console.log(emp.sayhi());
// emp.sayhi();

// let emp1 = new user("abh",33);
// emp1.sayhi();


// console.log(typeof user);
// console.log(user.prototype.sayhi);

//!DOM -- manipulate the html element

//!selectors
//?document.getElementsByTagName("select")
//?document.getElementById("select");
//?document.getElementsByClassName;
//?document.querySelector("select"); specific one
//?document.querySelectorAll("select"); same class name all

//!parent element

// var parent = document.querySelector('li'); //select li
// var p = parent.parentElement;//means li parent is ul 
// console.log(p); 

//!child
// var child = document.querySelector('li'); //select li
// var p = child.children; // means all html values
// var p = child.children[0];
// var p = child.childnodes // means show spaces and html element

//!previouselementsibling

// console.log(document.querySelector('.hero').previousElementSibling);//hero is a class name - means its return previous element value

// console.log(document.querySelector('.hero').previousElementSibling.previousElementSibling);//means return next previous


// var a = document.querySelectorAll('.hero');
// if(a.previousElementSibling == null){
//     console.log('siblings not found');
// }else{
//     console.log(a.previousElementSibling);
// }

//?both class are same name and return both previous 

// var a = document.querySelectorAll('.hero');
// a.forEach((ele)=>console.log(ele.previousElementSibling));

//?appendchild -- add your own child

// const ul = document.querySelector('ul');
// const newE = document.createElement('li');
// newE.textContent = "fs";
// ul.appendChild(newE);//add child

//?remove

// const ul = document.querySelector('li');
// ul.remove();

//?replace child
// const list = document.querySelector('ul');
// const childTochange = list.children[1]; //select which child element change
// const newLi = document.createElement('li'); 
// newLi.textContent = "fs";
// list.replaceChild(newLi.childTochange)


//?parent node or parent element both are simmilar

// var parent = document.querySelector('li'); //select li
// var p = parent.parentElement;//means li parent is ul 
// console.log(p);

// var parent = document.querySelector('li'); //select li
// var p = parent.parentNode;//means li parent is ul 
// console.log(p);


//?nextsiblings 
// const p = document.querySelector('li');
// console.log(p.nextElementSibling);

//?firstchild

// var fchild = document.querySelector('li');

// console.log(fchild.firstChild);
// console.log(fchild.firstElementChild); //space text

// //?lastchild

// var lchild = document.querySelector('li');

// console.log(lchild.lastChild);
// console.log(lchild.lastElementChild); //space text


// //!innerHTML //means change
// let a = document.querySelector('.hero');
// a.innerHTML = <b>fenil</b>
// console.log(a);

// //!outer

// let a = document.querySelector('.hero');
// a.outerHTML = <b>fenil</b>  //means li tag has remove //print fenil only no element 
// console.log(a.outerHTML);

//!styling

// backgroundcolor change


// document.body.style.backgroundColor = "blue";


//!addEventListener
// document.getElementById('btn').addEventListener('click',fun)

// function fun(){
//     console.log('button clicked');
// }

//!window location

// let loc = document.getElementById('location');
// loc.innerHTML = window.location.href; //current url
// loc.innerHTML = window.location.hostname; //current domain
// loc.innerHTML = window.location.pathname; //current path

// loc.innerHTML = window.location.assign("url of any website / redirect page");

// loc.innerHTML = window.location.reload(); //reload the page

//! popups
// alert("hello");

/// let confirmBox = confirm("are you sure?"); //return true or false
// prompt("hello how are you")


//!event delegation ==nested element selected

// const div = document.getElementsByTagName('div')[0];

// div.addEventListener('click', (event) => {
//     if(event.target.tagName == 'button'){
// console.log("button was clicked");
// }
// })

// div.addEventListener('click', (event) => {
//     if(event.target.tagName == 'span'){
// console.log("span was clicked");
// }
// })


//!dimension -- all info about elements 

// let a = document.querySelector('div');
// console.log(a.getBoundingClientRect); // give all info

// console.log(a.clientWidth); //width of element including padding and border



















