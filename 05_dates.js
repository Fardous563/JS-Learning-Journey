//1.new Date()

let myDate = new Date();

console.log(myDate.toString());      // Output: Wed Mar 25 2026 12:35:00...
console.log(myDate.toDateString());  // Output: Wed Mar 25 2026 (Shudhu Tarikh)
console.log(typeof myDate);          // Output: object (Interviewer-ra eta jiggasa kore)


//2.Custom Date

// Rule: (Year, Month, Date)
let myBirthday = new Date(2026, 0, 25); 

console.log(myBirthday.toDateString()); // Output: Sun Jan 25 2026

//3.Date.now()

let myTimeStamp = Date.now();
console.log(myTimeStamp); // Output: 1742884414000 (Emon boro shongkha)
// Second-e nite hole 1000 diye bhag koro
console.log(Math.floor(Date.now() / 1000)); // Output: 1742884414 (Ekhane 1000 diye bhag kore second-e convert koreche)

//4.Getter Methods (Specific Info Ber Kora)

let today = new Date();

console.log(today.getFullYear()); // 2026 (Puron bochor)
console.log(today.getMonth() + 1); // 3 (March mash, +1 korlam amader bujhar jonno)
console.log(today.getDate());     // 25 (Ajker tarikh)
console.log(today.getDay());      // 3 (Wednesday, karon 0=Sunday, 1=Monday...)

//5.toLocaleString() (Pro-Level Formatting)

let today = new Date();

let formattedDate = today.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});

console.log(formattedDate); // Output: Wednesday, March 25, 2026




