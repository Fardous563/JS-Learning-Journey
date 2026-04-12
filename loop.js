//1.For Loop

//*for loop er syntax: 
// for(initialization; condition; increment/decrement) { //code to be executed }

const cart=["apple", "banana", "orange"];

for (let i = 0; i < cart.length; i++) {
    console.log(cart[i]);
}
//output: apple, banana, orange



//2.For...of Loop
//*for...of loop er syntax:
// for (variable of iterable) { //code to be executed }

for(const item of cart){
    console.log(item);
}
//output: apple, banana, orange


//3.while Loop
//*while loop er syntax:
// while(condition) { //code to be executed }

let count=0;

while(count<5){
    console.log(count);
    count++;
}
//output: 0, 1, 2, 3, 4


//4.do...while Loop
//*do...while loop er syntax:
// do { //code to be executed } while (condition);

let num=0;

do{
    console.log(num);
    num++;
} while(num<5);
//output: 0, 1, 2, 3, 4

//5.Nested Loops
//*Nested loops er syntax:
// for (initialization; condition; increment/decrement) {
//     for (initialization; condition; increment/decrement) {
//         //code to be executed
//     }
// }
for(let i=1; i<=3; i++){
    for(let j=1; j<=2; j++){
        console.log(`Outer loop: ${i}, Inner loop: ${j}`);
    }

