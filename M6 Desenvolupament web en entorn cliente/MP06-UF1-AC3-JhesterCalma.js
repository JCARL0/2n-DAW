// TASCA 1

// let str = "Hello";
// str.test = 5;
// alert(str.test);

// ==============================================
// TASCA 2

// let str = "Patata";
// let str2 = new String("Patata");

// console.log(str==str2);
// console.log(str===str2);

// ==============================================
// TASCA 3

// let i = 0;
// while (i != 10) {
//     i += 0.2;
// }

// ==============================================
// TASCA 4

// checkSpam('buy BiAgRA now') == true
// checkSpam('free xxxxx') == true 
// checkSpam('innocent rabbit') == false


// function checkSpam(str) {
//     const lowerStr = str.toLowerCase();
//     return lowerStr.includes('viagra') || lowerStr.includes('xxxxx');
// }

// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));     
// console.log(checkSpam('innocent rabbit')); 

// ==============================================
// TASCA 5

// console.log(toAscii("ALBERT"));
// console.log(toChar([65,76,66,69,82,84]));

// (6) [65,76,66,69,82,84]
// ALBERT

// function toAscii(str) {
//     return Array.from(str).map(char => char.codePointAt(0));
// }
// // 

// function toChar(chars) {
//     return String.fromCodePoint(...chars);
// }

// // Comprobar
// console.log(toAscii("ALBERT")); 
// console.log(toChar([65, 76, 66, 69, 82, 84])); 

// ==============================================
// TASCA 6

// alert( formatDate(new Date(new Date - 1)) ); // "right now"
// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
// alert( formatDate(new Date(new Date - 5* 60 * 1000)) ); // *5 min. ago"
// // yesterday's date like 31.12.16 20:00
// alert( formatDate (new Date(new Date - 86400 * 1000)) );

// function formatDate(date) {
//     const now = new Date();
//     const diff = now - date; // Milliseconds

//     if (diff < 1000) {
//         return "right now";
//     } else if (diff < 60 * 1000) {
//         const seconds = Math.floor(diff / 1000);
//         return `${seconds} sec. ago`;
//     } else if (diff < 60 * 60 * 1000) {
//         const minutes = Math.floor(diff / (60 * 1000));
//         return `${minutes} min. ago`;
//     } else {
//         // Date format
//         const day = String(date.getDate()).padStart(2, '0'); //retrieves the day of the month from the date
//         const month = String(date.getMonth() + 1).padStart(2, '0'); //Months
//         const year = String(date.getFullYear()).slice(-2); //Last 2 digitsof the year, like 24 in 2024
//         const hours = String(date.getHours()).padStart(2, '0'); //retrieves the hours from the date
//         const minutes = String(date.getMinutes()).padStart(2, '0'); // retrieves the minutes from the date
        
//         return `${day}.${month}.${year} ${hours}:${minutes}`; //retrieves the full date and time into the specified format
//     }
// }


// console.log(formatDate(new Date(new Date - 1)));                // "right now"
// console.log(formatDate(new Date(new Date - 30 * 1000)));        // "30 sec. ago"
// console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));    // "5 min. ago"
// console.log(formatDate(new Date(new Date - 86400 * 1000)));     // e.g. "13.10.24 14:00"

// ==============================================
// TASCA 7

// for (let i = 0; i < 100000; i++) {
//     let doSomethng = i * i * i;
// }

// Record the start time
// const Time = Date.now();

// // Loop
// for (let i = 0; i < 100000; i++) {
//     let doSomething = i * i * i; 
// }

// // Record the end time
// const endTime = Date.now();

// // Calculate the duration
// const total = endTime - Time;

// console.log(`It took ${total} millisecond/s. :)`);


// ==============================================
// TASCA 8

// let meetup = {
//     title: "Conference",
//     room: {
//         number: 23,
//         participants: ["john", "ann"]
//     }
// };

// console.log(typeof(meetup)===typeof(JSON.stringify(meetup)));

// ==============================================
// TASCA 9


let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}]
    
};

console.log(JSON.stringify(meetup,["participants"]));

// ==============================================
