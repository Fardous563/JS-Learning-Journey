//1.Number Methods (toFixed & toString)

let num=3.14159;
console.log(num.toFixed(2)); //toFixed method number ke string e convart kore,ekhani 2 number porjonto  show korace

let phone = 12345;
console.log(phone.toString().length); // Output: 5 eta number ke string e convart kore tarpor length mrthod use kore number er length ber kore


//2.Intermediate: Math Rounding (ceil, floor, round)
let myGpa = 3.4;
console.log(Math.round(myGpa)); // Output: 3
console.log(Math.ceil(myGpa)); // Output: 4
console.log(Math.floor(myGpa)); // Output: 3


//3.Advanced: Finding Min & Max (Array Logic)

let numbers = [5, 2, 9, 1, 5, 6];
let min = Math.min(...numbers); //spread operator use kore array er sob element ke alada alada kore min method e pathacche
let max = Math.max(...numbers);
console.log(`Min: ${min}, Max: ${max}`); // Output: Min: 1, Max: 9


