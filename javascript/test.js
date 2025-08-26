//console.log -> to print the message
//javascript is dynamically typed
// console.log("disha");
// console.log("i am a engineer");

// //variables in javascript
// age=21
// console.log(age)
// age=age+1
// console.log(age)

// name ="disha sharma";
// console.log(name);

// price=77.3;
// x=null;
// console.log(price);
// console.log(x);

// y=undefined;
// console.log(y);

// isfollow=true;
// console.log(isfollow)

// let fullname="disha";
// // let fullname="prisha"; //cannot be redeclared
// let totalprice=1000;

// console.log(fullname)

// const num=23;
// // num=43; //cannot be redeclared as it is constant
// console.log(num);

// // let a;
// // const a;

// {
//    let a = 5; 
// //    let a =20; cannot be redefined
//    console.log(a);
// } //first block

// {
//     let a = 34;
//     console.log(a);
// }//second block

//comments in javascript
//single line comment
/*multiple line comment*/


// let name = prompt("Enter your name:");
// console.log(name);

// let num = prompt("enter a number :");
// let a=parseInt(num);
// console.log(a);
// if(a%5==0){
//    console.log("It is a multiple of 5");
// }
// else{
//    console.log("not a multiple of 5");
// }

// let num = prompt("enter the marks");
// let a = parseInt(num);
// if(a<=100 && a>=80){
//    console.log("Grade A ")
// }
// else if(a<=79 && a>=70){
//    console.log("Grade B");
// }
// else if(a<=69 && a>=60){
//    console.log("Grade C");
// }
// else if(a<=59 && a>=50){
//    console.log("Grade D");
// }
// else{
//    console.log("Grade F");
// }

// let gamenum=48;
// let b=prompt("guess and enter the number:");
// // console.log(b);
// if(b<=25){
//    console.log("you guessed wrong...hint-> the number is greater")
// }
// else if(b<=100 && b>=50){
//    console.log("you guessed wrong...hint-> the number is smaller")
// }
// else if(b==gamenum){
//    console.log("congratulations!!..you guessed right!!")
// }

//guessing game
// let gamenum=25;
// let b=prompt("guess the number : ");
// while(b!=gamenum){
//  b =  prompt("you guessed wrong...enter again : ");
// }
// console.log("congratulations you entered rigt!!");

//promot the user to enter their name ..generate the username for them based on the input. start username wit @ followed by their full name and ending with the fullname length

let a = prompt("Enter your full name without spaces : ");
console.log(a);
b=a.length;
let username="your username is = "+"@"+a+b;
console.log(username);

