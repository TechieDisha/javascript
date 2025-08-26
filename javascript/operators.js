//operators in  javascript
//used to perform some operations on data
//1.ARITHMETIC OPERATORS
let a =10;
let b=20;
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);

//modulus operator
console.log("b%a=",b%a);

//exponential operator
let c=2;
let d=3;
console.log("c**d",c**d);

//unary operator
//postincrement operator
let k=10;
console.log("k=",k++); // prints the same value
console.log(k) //increments the value by one

//preincrement operator
console.log("k=",++k);
console.log(k);

//assignment operators
//=  +=  -=  *= %= **=
let p=9;
p+=7;
console.log(p);

//comparision operators
//== equal to
//!= not equal to
//>= , > ,< , <=
//comparision operators return true or false
let x=5;
let y = 8;
console.log("5==8",5==8);
console.log(5!=6)

//point to be noted
let t=5;//number
let l="5"; // string type
console.log(t==l);  // retuens true
//this is because javascript == operator converts the string into numbers and then check if it is same..it do not check the datatype

// so we use the stricter version of assignment === operator which checks the data type also
let n=5;//number
let m="5"; // string type
console.log(n===m);

//logical operators
// also gives true or false
//logical AND &&
//LOGICAL OR  ||
//LOGICAL NOT !

let r=6;
let o=8;
let cond1=r>o; //false
let cond2=(r==o); //false
let cond3=r==6;
console.log(cond1&&cond2); //both false so false
console.log(cond1||cond3);//one true so true
//logical not
let cond4 = !(r>o); //turns false condition to true
console.log(cond4);











