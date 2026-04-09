//1.Basic: Array Declaration & Access

const students = ["Alice", "Bob", "Charlie", "David"];
console.log(students[0]); //output alice, arry ar frist element access korar jonno index 0 use kora hoi
console.log(students.length); //output 4, array ar length ber korar jonno length property use kora hoi
console.log(students[students.length - 1]); //output david, array ar last element access korar jonno length - 1 index use kora hoi


//2.Intermediate: Add & Remove Elements

let fruits = ["Apple", "Mango"];
fruits.push("Banana"); //push method array ar sesh e element add kore
console.log(fruits); //output: ["Apple", "Mango", "Banana"]

fruits.pop(); //pop method array ar sesh theke element remove kore
console.log(fruits); //output: ["Apple", "Mango"]

fruits.unshift("Strawberry"); //unshift method array ar surute element add kore
console.log(fruits); //output: ["Strawberry", "Apple", "Mango"]

fruits.shift(); //shift method array ar surute element remove kore
console.log(fruits); //output: ["Apple", "Mango"]


//3.Intermediate: Slice vs Splice

let myArr = [10, 20, 30, 40, 50];
let slicedArr=myArr.slice(1,4); //slice method array ar ekta part return kore, ekhane start index 1 and end index 4
console.log(slicedArr); //output: [20, 30, 40]
console.log(myArr); //output: [10, 20, 30, 40, 50] slice method original array ke change kore na


let myArr = [10, 20, 30, 40, 50];
myArr.splice(1, 2, 25, 35); //splice method array ar ekta part remove kore and tar jaygay notun element add kore, ekhane start index 1, remove count 2, and new elements 25 and 35
console.log(myArr); //output: [10, 25, 35, 40, 50] splice method original array ke change kore
