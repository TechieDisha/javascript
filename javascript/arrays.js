//ARRAYS IN JAVASCRIPT
//Arrays are collection od items
//indices play a major role in arrays

/*one method is to declare variables one by one
let marks_student1 =97;
let marks_student2 =96;
let marks_student3 =94;
let marks_student4 =98;
let marks_student5 =97;

another method is to create an object and declare other key value pairs in it
let marks = {
    stu1:34,
    stu2:67
}
but this is not  a good idea */
// IN ARRAY WE STORE INFORMATION IN LINEAR FORM
//EXAMPLES OF ARRAYS : 
//let marks = [67,87,54,92];
//we can also store different datatypes in an array
//let info = ["disha",67,67.9];
// generally we create same type of elements in an array

let marks= [32,34,56,75,75];
console.log(marks);
// there is the difference between methids and properties
// length property:
console.log(marks.length); //pirnts the  length
let heros = ["hulk","shaktiman","ironman","spiderman"];
console.log(heros);
console.log(heros.length);
console.log(typeof marks);
// in js array is also cinsidered to be an object that is , it is the combination of key value pair in which the indexes are the keys and the data given is the vslue
console.log(marks[0]);
console.log(marks[5]);
//changes in the value
// arryas are mutable
marks[2]=66;
console.log(marks[2]);
let str = "hello";
console.log(str[0]);
// strings are immutable we cannot make changes to string
str[0]="y";
console.log(str[0]);
// iterabls: in which we can apply the loop(string , objects , arrays)
// FOR LOOOP
for(let i=0;i<5;i++){
    console.log(marks[i]);
}
for(let i=0;i<heros.length;i++){
    console.log(heros[i]);
}
// FOR OF LOOP
for(let hero of heros){
    console.log(hero);
}

let cities = ["delhi","gurgaon","kanpur","jaipur"];
for(let city of cities){
    console.log(city);
}
//To print the cities in uppercase

for(let city of cities){
    console.log(city.toUpperCase());
}

let stumarks = [98,96,94,93,91];
let sum=0;
for(let i=0;i<stumarks.length;i++){
    sum=sum+stumarks[i];
}
console.log(sum);
let avg = sum/(stumarks.length);
console.log(avg);

//by using for of loop
let price = [250,645,300,900,50];
// let i=0;
// for(let p of price){
//     let discount=p/10;
//     price[i]=price[i]-discount;
//     console.log(`value after offer =  ${price[i]}`);
//     i++;
// }
// console.log(price);

//by using for loop 
for(let k=0;k<price.length;k++){
    let offer = price[k]/10;
    price[k]=price[k]-offer;
}
console.log(price);

/* ARRAY METHODS
There are two types of array methods 
1. which change the array 
2. which gives a new array
push(): add to end
pop(): delete from end and return
tostring():converts array to string
concat() : joins multiple arrays and returns result
unshift(): add to start (works same as push but from begining)
shift(): delete from start and return (works same as pop)
slice(): returns the piece of array (do not change the original array)
slice(startindex,endindex)
last index not included

splice(): change original array(add, remove,replace)
splice(startindex,delcount,new)



*/

let veggies = ["potato","tomato","onion","chilies","reddish"];
veggies.push("carrot");
console.log(veggies);
//pushing multiple elements
veggies.push("ocra","spanich");
console.log(veggies);

let deleted=veggies.pop();
console.log(deleted);
console.log(veggies);

console.log(veggies.toString());

let marvel_heros = ["thor","ironman","spiderman"];
let dc_heros = ["superman","batman"];
let legends = marvel_heros.concat(dc_heros);
console.log(legends);
// add to begining
legends.unshift("antman");
console.log(legends);
// remove from end
legends.shift();
console.log(legends);
console.log(legends.slice(1,3));
let arr = [67,76,98,45,66,767];
// adding element
console.log(arr.splice(2,2,101,103,104));
console.log(arr);
// deleting element
arr.splice(3,1);
console.log(arr);
// replacing element
arr.splice(3,1,89);
console.log(arr);
// all elements deleted from 3
arr.splice(3);
console.log(arr);

