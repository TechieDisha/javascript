/*block of codde that performs specific task can be invoked whenever needed*/

console.log("hello");
console.log("xyz".toUpperCase());
p=[1,2,3];
p.push(4);
console.log(p);

/*FUNCTION DEFINITION
function functionName(){
    //do some work
}
function functionName(param1,param2){
    //do some work
}
FUNCTION CALL
functionName()*/

function myFunc() {
    console.log("Welcome to disha's world");
    console.log("I am learning javascript");
}
myFunc();

function myfun(msg){
    console.log(msg);

}
myfun("hello");
myfun("I am disha");
myfun(6);

//function to create the sum of two numbers
function sum(x,y){
    //local variables
    let s=x+y;
    //x is a local variable
    console.log(x);
    return s;

}
let value=sum(7,7);
//console.log(x); cannot be printed
console.log(value);

/*ARROW FUNCTIONS
compact way of writing functions
const functionName = (param1,param2)=>{
    //do work
}
arrowfunction are the part of modern javascript*/

//add function
function add(a,b){
    return a+b;
}
//creating an arrow function 
const arrowsum = (a,b)=>{
    console.log(a+b);
}
arrowsum(4,6);

const arrowMul = (a,b)=>{
    return a*b;
}
let m=arrowMul(4,6);
console.log(m);

//function to count vowels
function countVowels(str){
    let count =0;
    for(const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u") {
            count++;
        }
    }
    console.log(count);

}
countVowels("elephant");

const vowel =(str)=>{
    let count =0;
    for(const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u") {
            count++;
        }
    }
    console.log(count);

}
vowel("heaven");

// FOR EACH LOOP IN ARRAYS
//ALSO CALLED AS HIGHER ORDER FUNCTIONS OF HIGHER ORDER METHODS
//higher orer functions take another functions as parameters and can also return function (generally the functions which use callback functions are higher order)
/*for each is the method which is generally used for arrays
syntax:
arr.forEach(callBackFunction)
imp concept of javascript :
* functions can be passed as arguments in another function and can also be returned

CALLBACK FUNCTION :
Here, it is a function to execute for each element in the array

*A call back function passed as an atgument to another function
arr.forEach((val)=>{
    console.log(val);
})

ex:
function abc{
    console.log("hello");
}
function myfun(abc){
    //one function passed as an argument
}
*/
let arr = [3,6,6,7,8,8];
arr.forEach(function printval(val){  //val means value at each index
console.log(val);
});

let city =["delhi","mumbai","pune"];
city.forEach((val , idx,city) => {
    console.log(val.toUpperCase(),idx,city);
})

/*we can also print index and array along with it

let city =["delhi","mumbai","pune"];
city.forEach((val, idx, city) => {
    console.log(val.toUpperCase(), idx);
})*/

//for a given array of numbers print the square of each value using the foreach loop

let num = [1,2,3,4,5,6,7,8,9,10,11];
num.forEach((val)=>{
    console.log(val**2); //val*val==val**2
})

//some more array methods
/*1.MAP METHOD -> Map method is very similar to for each
the difference is that it creates a new array with the results of some operation. the value its call bacl returns are used to form new array

ex:arr.map(callbackFnx(value\,index,array))

let newarray = arr.map((val)=>{
    return val*2;
})
*/
num.map((val)=>{
    console.log(val);
})
//values stored in the new array
let newArray =num.map((val)=>{
    return val*2;
})
console.log(newArray);

//2.FILTER METHOD : used to filter out some values based on some condition
/*creates a new array of element that give true for a condition/filter 

eg: all even elements

let newArr = arr.filter((val)=>{
    return val%2===0;
})
*/

/* 3.REDUCE METHOD: Performs some operations and reduces the array to a single value. It returns that single value*/

/*const array1 = [6,8,4,2];
//0+1+2+3+4
const initialval=0;
const sumWithInitial = array1.reduce((accumulator,currentvalue)=> accumulator+currentvalue,initialvalue

);
console.log(sumWithInitial);
expected output 20
accumulator is also called the result and current value is the val
for example in this array firstly the result will be 6 and the val willbe 8 so accumulator+currentvalue =(6+8) which is 14 and this is stored in result 
nextly the result will be 14 and val will be 4 so 14+4=18 will be stored in the result

*/

let ar = [6,8,4,2];
let output = ar.reduce((res,val)=>{
    return res+val;
})
console.log(output);

//to find the maximum numberin an array

let ans = ar.reduce((prev,val)=>{
    return prev>val? prev:val;
    //agar previous bada hai current se to previous return kardo nito current ko return kardo
})
console.log(ans);

//we are given with array of marks of students . Filter out the marks of students that scored 90

let marks = [56,87,90,67,99,93];
const stu = marks.filter((val)=>{
    return val>90;
})
console.log(stu);

//take a number n as an input from the user . Create an array of numbers from 1 to n

let n = prompt("Enter a number: ");
let arra=[];
for(let i=1;i<=n;i++){
    arra[i-1]=i; //1[0],2[1],3[2]
}
console.log(arra);


