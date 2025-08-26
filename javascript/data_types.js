//data types in js
//PRIMITIVE DATA TYPES 
//number , string , boolean , null , biglnt , symbol
age = 45;
console.log(age)
console.log(typeof age)

name = "mini";
console.log(name)
console.log(typeof name)

isFollow = true;
console.log(isFollow)
console.log(typeof isFollow)

let x; //by default undefined
console.log(x)
console.log(typeof x)

let b = null; //it will be an object type
console.log(b)
console.log(typeof b)

let c = BigInt("123")
console.log(c) //always print n at last
console.log(typeof c)

let y = Symbol("hello")
console.log(y)
console.log(typeof y )

//OBJECTS --- It is the collection of values
// key : value pairs are stored in objects

const student={  
    fullname : "rahul kumar",
    age:20,
    cgpa: 7.7,
    isPass : true
};
console.log(student)
console.log(typeof student)

//Accessing the keys of the object
console.log(student["fullname"])
//another way
console.log(student.fullname)

//updating key values
student["age"]=student["age"]+1;
console.log(student.age);


