//1.length
//length method holo string ar akta property ja string ar length ba charater count kore

let myName="Fardous";
console.log('My name is',myName);
console.log('My name has',myName.length,'characters');

//*Advanced string methods

let userPassword = "123"; // usear ai password delo

if (userPassword.length < 8) {
    console.log("password ta khub soto,ontotto 8 okkhor den");
} else {
    console.log("password ti grohon kora hoyace");
}


//2.slice(start, end)

let learn="javasceipt";
let result=learn.slice(0,4); //slice method start thake end porjonto string ar akta part return kore,ekhane star part 0 and end part 4
console.log(result)

let brand = "FStackDev";
let onlyDev = brand.slice(6); 
console.log(onlyDev); //6 number position a ache D jahatu ses semana bolini tai D thaki a porjonto nibe.

let filmName="student of the year";
let word="filmName.slice(-3)"; //negative number dela last thaki count kore.


//3.includes()

let message ="i love javascript";
console.log(message.includes("javascript")); //includes method cheek kore string ar moddhe kono specific word ace ki na ,takle true r na thake flase dekhai
console.log(message.includes("python"));//python nei tai false dekhabi


//*Real-world Use Case

let userComment = "This course is a scam and total waste of money!";
let badWord = "scam";

if (userComment.toLowerCase().includes(badWord)) {
    console.log("apnr comment a nisheddo sobdo ache eta published hobi na");
} else {
    console.log("comment sofol vabi post hoyace");
}



//4..split() and .join()

let frutes="apple,banana,orange";
let frutesArray=frutes.split(","); //split method string ke array te convart kore,ekhani comma diya split korace 
console.log(frutesArray);

let items = ["Apple", "Orange", "Banana"];
let newString = items.join("-");
console.log(newString); //output: Apple-Orange-Banana

//*Advanced: URL Slug making

let title = "How to Learn JavaScript";

// step 1: convart to lowercase
// step 2: split by space
// step 3:hiphen diya jora lagano
let urlSlug = title.toLowerCase().split(" ").join("-");
console.log(urlSlug); //output: how-to-learn-javascript

//*Real-world Use Case

let studentList = "Abir, Karim, Rahim, Jashim";
let count = studentList.split(",").length;

console.log(`total students: ${count}`); // output: total students: 4


//5..replace() and .replaceAll()

let msg="i love javascript";
let newMsg=msg.replace("javascript","js"); //Ekhane replace prothom bondhonite (bracket) duita jinis niche. Prothomta holo "kake bodlabo" (Java) ar ditiyota holo "ki boshabo" (JS).
console.log(newMsg);

let status = "Bad day, Bad life, Bad mood";
let newStatus = status.replaceAll("Bad", "Good");
console.log(newStatus);//replace dile sudhu prothom bondhu ke bodlabe, kintu replaceAll dile puru line-e jotogula mil pabe sob bodle debe.


//*Real world use case

let template="dear [name],how are you?";
let userName="Fardous";
let finalMsg = template.replace("[NAME]", studentName);
console.log(finalMsg); // Output: Welcome Abir, kemon acho?
//Real life project-e evabe template baniye rakha hoy ar replace diye dyanamic-vabe (proyojon moto) nam ba onno data boshano hoy.

