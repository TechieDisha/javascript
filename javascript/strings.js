//strings are sequence of characters used to represent
let str="I am a good girl";
let str2="I am very talkitive";
console.log(str);
console.log(str2);

//length of the string
console.log(str.length);
console.log(str2.length);

//acessing the indices separately
console.log(str[3]);

//using backtick ``
//using back tick we create template literal
//we can write both string and variables together using template literals
let mystring=`beautiful me `;
console.log(mystring);
console.log(typeof str);

let obj={
    item: "pen",
    price:23,
};
//using template literal we write variable and string together
//accessing values by ${objectname.key}
//the values become the part of string
let output =`The cost of ${obj.item} is ${obj.price}`;
console.log(output);
console.log("item is=",obj.item);
console.log(obj["item"]);
console.log(obj["price"]);
console.log(obj);

//??? IMPORTANT ???
//TEMPLATE LITERALS
//A way to have embedded expressions in strings
//`This is a template literal`

//STRING INTERPOLATION
//To create strings by substituting of placeholders
//`string text ${expression} string text`

//example of template literal and string interpolation
let specialstring = `This is a template literal ${1+2+3}`;
console.log(specialstring);

//STRING METHODS IN JAVASCRIPT
//These are built-in functions to manipulate a string
//strings are "immutable"
//original sring me kabhi changes nahi aate hain 
//for example

let x = "ball";
x.toUpperCase();
console.log(x); //string does not turn to uppercase because it forms a new string and no changes can be made in original string
//to resolve this we store it in new string as:
let y = x.toUpperCase();
console.log(y);


//str.toUpperCase()
let p = "i am a cat";
console.log(p.toUpperCase());

//str.toLowerCase()
let q = " HELLO BEAUTIFUL";
console.log(q.toLowerCase());

//str.trim() //removes whitespaces from starting and end only


let j = "     hello hello     i have lotss    of    white    s p a c e s . . . .     ";
console.log(j.trim());

//MORE STRINGS METHODS : 
//str.slice(start,end?) -> return part of string //ending value not included

//str1.concat(str2) -> joins str2 wit str1

//str.replace(searchVal, newval) -> replace the string only once
//str.replaceall() -> replaces each time

//str.charAt(idex)
let t = "hellow";
console.log(t.replace("h","y"));