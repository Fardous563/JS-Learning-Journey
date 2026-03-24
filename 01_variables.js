//1.Value Swapping

let leftHand="apple";
let rightHand="orange";
let table;   
// table ta amder blank jaiga,jekhani amra amader value rakhe ta change korbo
table=leftHand; //table ar upor ekhon amr left hand ar value raklam
leftHand=rightHand;   //left hand ar value change kore ekhon right hand ar value raklam
rightHand=table; //right hand ar value change kore ekhon table ar upore raklam

console.log("bamhat ekhon",leftHand)
console.log("dan hat ekhon",rightHand)


//2.Math with Variables

let ricePrice=50;
let oilPrice=120;
let riceQuantity=2;

let totalricePrice=ricePrice*riceQuantity;
let totalCost=totalricePrice+oilPrice;
console.log("total cost",totalCost)
console.log("total rice price",totalricePrice)


//3.String Concatenation

let heroName = "Tom Cruise";
let movieName = "Mission Impossible";
let releaseYear = 1996;
let fullDetails=heroName + " starred in the movie " + movieName + " released in " + releaseYear;
console.log(fullDetails)



//4.Updating Value

//start my profile
let userName="fardous";
let bio="i love code";

//after 1 yaer change my profile
userName="Fardous Rahman";
bio="i love code and i am a web developer";

console.log("my name is",userName)
console.log("my bio is",bio)


