//FOR LOOPS IN JAVASCRIPT
//printing name 10 times
// for(let i=1;i<=10;i++){
//     console.log("disha");
//     // console.log("\n");
// }
// console.log("loop ended");

//printing the sum of first 10 natural numbers
// let sum=0;
// for ( let i=1;i<=10;i++){
//     sum=sum+i;
// }
// console.log(sum);

//INFINITE LOOPS IN JAVASCRIPT
// for(let i=1;i>=0;i++){
//     console.log("disha");
// }

// let i =1;
// while(i<=5){
//     console.log("disha");
//     i++;
// }


//do while loop ek baar to chalta hi h
let i=3;
do{
    console.log("disha");
}while(i<2)

//FOR OF LOOP
//we use it to iterate over arrays or strings
//syntax: for("let val of strVar")

let str="I am a good girl";
let size=0;
for(let i of str){
    console.log(i);
    size++;
}
console.log(size);

//FOR-IN LOOP
//we use it to iterate over objects
//for(let key in objVar)
//it prints all the keys

// let student={
//     name : "Anant Agrawal",
//     age : 23,
//     gender:"male",
//     cgpa:7.7


// };
// for(let i in student){
//     //console.log(i);
//     console.log("key=",i,"value=",student[i]);
// }

// //PRACTICE SET PRINT ALL THE EVEN NUMBERS FROM 0 TO
// for(let i=0; i<=100; i++){
//     if(i==0||i%2==0){
//         console.log(i);
//     }
    
// }

let gamenum=48;
let b=prompt("guess and enter the number:");
console.log(b);




