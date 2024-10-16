// let user = new Object();
// user.name = "Carlo";
// user.age = 19;
// console.log(user); // Salida Carlo 19

// let user = {
//     name: "Carlo",
//     age: "19",
//         "Tilin" : true
// }

// alert(user);
// alert (user.name);
// alert (user.age);
// console.log(user);

// user.Tilin = true
// user["Tilin"] = false;

// delete user.age


// function makeUser(name, age) {
//     return {
//         name,
//         age,
//     }
// }

// console.log(makeUser("John", 19))


// let user =  {
//     name: "Carlo",
//     age: 19
// }

// alert("age" in user); // true user.age exists
// alert("blabla" in user); // false user.age doesnt exist


// let obj = {
//     test: undefined
// }

// alert(obj.test);
// alert( "test" in obj);


// let codes = {
//     "49" : "Germany",
//     "41" : "Switzerland",
//     "44" : "Great Britain",
//     "1" : "USA"
// };

// for (let code in codes) {
//     alert(code); // 1 -->  41 --> 44 --> 49
// }


// let codes = {
//     "+49" : "Germany",
//     "+41" : "Switzerland",
//     "+44" : "Great Britain",
//     "+1" : "USA"
// };

// for (let code in codes) {
//     alert( +code ); // 49 -->  44 --> 41 --> 1
// }



// let message = "Hello!";
// let phrase = message;
// console.log(message);


// let user = {
//     name: "John"
// }

// let admin = user;
// console.log(admin)


// let a = {
//     name: "Carlo"
// };

// let b = {
//     name: "John"
// };
// let b = a;
// console.log(b) // copy the reference


// alert (a == b); // true
// alert (a === b);

// alert ( a == b ) // false



// let user =  {
//     name: "John",
//     age: 19
// };

// let clone = {} // object vacia para clonar
// for (let key in user){
//     clone[key] = user[key];
// };
// console.log(clone) // clona todas las propiedades del user

// clone.name = "Pete";
// alert(clone.name); // changed the data in it
// alert(user.name); // still John is the original object

// let clone = Object.assign({}, user);

// let clone = structuredClone(user);
// console.log(clone);




// let user = {
//     name: "John",
//     age: 30,
//     sayHi: function() {
//         console.log("Hello!");
//     }
// };
// user.sayHi();



// let user = {
//     name: "John",
//     age: 30,
//     sayHi() {
//         console.log("Hello")
//     }
// }

// function sayHi() {
//     alert("Hello!");
// }

// user.sayHi = sayHi;
// user.sayHi();


// let user = {
//     name: "John",
//     age: 30,

//     sayHi() {
//         alert(this.age)
//     }
// };

// let admin = user;
// user = null;
// user.sayHi();
// admin.sayHi();


// let user = { name : "John" };
// let admin = { name : "Admin"};

// function sayHi() {
//     alert(this.name);
// };

// user.f = sayHi;
// admin.f = sayHi;
// user.f();
// admin.f();
// admin['f']();


// function sayHi(){
//     alert(this);
// }
// sayHi();


// let user = {
//     firstName: "Ilya",
//     sayHi : () => console.log(this.firstName)
// };
// user.sayHi(); // undefined


// let user = {
//     firstName: "Ilya",
//     sayHi() {
//         let arrow = () => console.log(this.firstName);
//         arrow();
//     }
// };
// user.sayHi(); // Salida: Ilya


// function User(name){
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("Carlo");
// alert(user.name); // Salida: Carlo
// alert(user.isAdmin); // Salida: false

// let user =  {
//     name: "Carlo",
//     age: 19
// }

// console.log("age" in user);


// let meetup = {
//     title: "Conference",
//     participants: [{name: "John"},{name: "Alice"}]

// };

// console.log(JSON.stringify(meetup,["participants"]));   























// ==================================================================================================================================================================================================================================================================================================================================
// Majuscules i Minisculas
// let str = "Hola"
// console.log(str.toUpperCase()) // HOLA
// console.log(str.toLowerCase()) // hola

// Index de subcadena
// let str = 'Widget with id';
// alert(str.indexOf('Widget') ); // 0,
// alert(str.indexOf('widget') ); // -1,
// alert(str.indexOf("id")); // 1, "id"


// Direccionament
// alert( 'My\n'.length); // 3
// let str = 'Hola'
// alert( str[0]); // H
// alert( str.at(0)); // H

// alert( str[str.length - 1]); // a
// alert( str.at(-1)) // a

// let str = "stringify";
// alert ( str.slice(0,5)); // strin
// alert( str.slice( 0, 1)); // s


// Iteracio
// for (let char of "Hello"){
//     console.log(char);
// }  // H,e,l,l,o



// strings - trobar subcaddenas
// let str = 'As sly as a fox, as strong as an ox';
// let target = 'as'; // let's look for it
// let pos = 0;

// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;
//   console.log(`Found at ${foundPos}`);
//   pos = foundPos + 1; // continue the search from the next position
// }
//                         // Found at 7
//                         // Found at 17
//                         // Found at 27


// let str = 'As sly as a fox, as strong as an ox';
// let target = 'as';
// console.log(str.includes(target)); // true



// STRINGS - ASCII <-> CARACTER
// console.log( "Z".codePointAt(0)); // 90
// console.log( "z".codePointAt(0)); // 122
// console.log( "z".codePointAt(0).toString(16)); // 7a


// console.log(String.fromCodePoint(90)); // Z
// console.log(String.fromCodePoint(0x5a)); // Z



// NUMBER: EL PROBLEMA DE LA COMA FLOTANT 
// console.log ( 0.1 + 0.2 ==  0.3); // false
// console.log ( 0.1 + 0.2); // 0.30000000000000004

// console.log (( 0.1 + 0.2).toFixed(1)); // 0.3


// TREBALL AMB DATES
// let Jan01_1970 = new Date(0);
// console.log(Jan01_1970); // Thu Jan 01 1970 01:00:00 GMT+0100 (Central European Standard Time)

// let Jan02_1970 = new Date( 24 * 3600 * 1000);
// console.log ( Jan02_1970 ); // Fri Jan 02 1970 01:00:00 GMT+0100 (Central European Standard Time)

// let now = new Date();
// console.log ( now ); // current datetime

// let date = new Date("2017-01-26");
// console.log(date); // Thu Jan 26 2017 01:00:00 GMT+0100 (Central European Standard Time)

// new Date(2011, 0, 1, 0, 0, 0, 0);
// new Date(2011, 0 , 1);


// AUTOCORRECCIO DE DATES
// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 2);
// console.log(date); // original: Feb 29 actualizado: Mar 1


// let date = new Date();
// date.setSeconds(date.getSeconds() + 70);
// console.log(date); // Data actual

// PARSEIG DE DATES 
// let date = new Date (Date.parse('2012-01-26T13:51:50.417-07:00'));
// console.log(date); //Thu Jan 26 2012 21:51:50 GMT+0100 (Central European Standard Time)

// JSON.STRINGIFY
// let user = {
//     name: "Albert",
//     edat: 40,
//     fills: true,
//     sayHi() { // s'ignora
//         alert("Hello");
//     },
//     [Symbol("id")]: 123, // s'ignora
//     something: undefined // s'ignora
// };

// console.log( JSON.stringify(user)); // {"name":"Albert","edat":40,"fills":true}


// let meetup = {
//     title: "Conference",
//     room: {
//         number: 23,
//         participants: ["John", "Ann"]
//     }
// };

// console.log(JSON.stringify(meetup)); // {"title":"Conference","room":{"number":23,"participants":["John","Ann"]}}



// JSON.STRINGIFY: ESPAIS D'INDENTACIÓ
// let meetup = {
//     title: "Conference",
//     room: {
//         number: 23,
//         participants: ["John", "Ann"]
//     }
// };

// console.log(JSON.stringify(meetup, null, 2));


// JSON.STRINGIFY: REPLACER
// let meetup = {
//     title: "Conference",
//     room: {
//         number: 23,
//         participants: ["John", "Ann"]
//     }
// };

// console.log(JSON.stringify(meetup, ["title"], 2));
// {
//     "title": "Conference"
// }


// JSON.PARSE
// let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3]}';
// let user = JSON.parse(userData);

// console.log(typeof(user["name"])); // string
// console.log(typeof(user["age"])); // number
// console.log(typeof(user["isAdmin"])); // boolean
// console.log(typeof(user["friends"])); // object
// console.log(user["friends"]); // (4) [0, 1, 2, 3]



// JSON.PARSE: ALERTA AMB JSON CORRUPTES
// let json = {
//     name: "John", // mistake: property name without quotes
//     "surname": 'Smith', // mistake: single quotes in value (must be double)
//     "isAdmin': false   // mistake: single quotes in key (must be double)
//     "birthday": new Date(2000, 2, 3),// mistake: no "new" is allowed, only bare values
//     "friends": [0,1,2,3] // here all fine
//     };

// let user = JSON.parse(json);
// console.log(user);


// JSON.PARSE: FUNCIO REVIVER
// let str = '{"title": "Conference", "date":"2017-11-30T12:00:00.000Z")';
// let meetup = JSON.parse(str);

// console.log(meetup.date.getDate());
//         // Uncaught TypeError TypeError: meetup.date.getDate is not a function at<anonymous>(c: \Users\alber\OneDrive\Escritorio\Intro JS\repaso.js: 5:26 <anonymous> @c: \Users\alber\OneDrive\Escritorio\Intro JS\repaso.js: 5: 20




// let str = '{"title": "Conference", "date":"2017-11-30T12:00:00.000Z"}';
// let meetup = JSON.parse(str, function (key, value) {
//     if (key == 'date') return new Date(value);
//     return value;
// });
// console.log(meetup.date.getDate());




let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};

console.log(typeof(meetup)===typeof(JSON.stringify(meetup)));