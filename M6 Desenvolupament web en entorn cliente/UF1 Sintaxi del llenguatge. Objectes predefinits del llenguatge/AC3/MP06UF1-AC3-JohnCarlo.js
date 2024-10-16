// ==================================================================================================================================================================================================================================================================================================================================
// Tasca 1. Per què str.test retorna undefined?
let str = "Hello";
str.test = "5";
alert(str.test);

los strings son primitivos e inmutables, por lo que no pueden tener propiedades personalizadas. Aunque str.test = "5"; no da error, la propiedad no se almacena y alert(str.test) devuelve undefined.



// ==================================================================================================================================================================================================================================================================================================================================
// Tasca 2. Com s’expliquen els resultats d’aquestes comparacions d’igualtat?
let str = "Patata";
let str2 = new String("Patata");

console.log(str==str2);
console.log(str===str2);

== devuelve true porque compara solo el valor
=== devuelve false porque compara valor y tipo (string vs objeto)



// ==================================================================================================================================================================================================================================================================================================================================
// Tasca 3. Per què aquest bucle és infinit?
let i = 0;
while (i != 10) {
    i += 0.2;
}

El bucle es infinito por errores de precisión al sumar 0.2, por lo que i nunca es exactamente 10



// ==================================================================================================================================================================================================================================================================================================================================
// Tasca 4. Escriu una funció checkSpam(str) que retorni true si str conté ‘viagra’ o ‘XXX’, i false en cas contrari. La funció ha de ser case-insensitive:
checkSpam('buy BiAgRA now') == true
checkSpam('free xxxxx') == true 
checkSpam('innocent rabbit') == false

function checkSpam(str) {
    str = str.toLowerCase();
    return str.includes('viagra') ? true : str.includes('xxx') ? true : false;
  }
  


// ==================================================================================================================================================================================================================================================================================================================================
// Tasca 5. Escriu una funció toAscii(str) que retorni una llista dels codis ASCII dels caràcters de str. Escribiu una altra funció toChar(chars) que formi una cadena de text a partir de la llista de codis ASCII. Feu servir els mètodes codePointAt i fromCodePoint, respectivament.
console.log(toAscii("ALBERT"));
console.log(toChar([65,76,66,69,82,84]));

function toAscii(str) {
    var asciiCodes = [];
    for (var i = 0; i < str.length; i++) {
        asciiCodes[i] = str.charCodeAt(i);
    }
    return asciiCodes;
}

function toChar(chars) {
    var str = "";
    for (var i = 0; i < chars.length; i++) {
        str += String.fromCharCode(chars[i]);
    }
    return str;
}



// ==================================================================================================================================================================================================================================================================================================================================
// Tasca 6. Escriu una funció formatDate(date) que formategi date de la següent manera:
// Si des de date ha passat menys d'1 segon, retornarà "right now".
// En cas contrari, si des de date ha passat menys d'1 minut, retornarà "n sec. ago".
// En cas contrari, si és menys d'una hora, reornarà "m min. ago".
// En cas contrari, retornarà la data completa en el format "DD.MM.YY HH:mm". És a dir: "day.month.year hours:minutes", tot en format de 2 dígits, p . ex 31.12.16 10:00.

alert( formatDate(new Date(new Date - 1)) ); // "right now"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
alert( formatDate(new Date(new Date - 5* 60 * 1000)) ); // *5 min. ago"

function formatoDate(date) {
    let diff = Date.now() - date;

    if (diff < 1000) return "right now";
    if (diff < 60 * 1000) return Math.floor(diff / 1000) + " sec. ago";
    if (diff < 60 * 60 * 1000) return Math.floor(diff / (60 * 1000)) + " min. ago";

    return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getFullYear()).slice(-2)} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}



// ==================================================================================================================================================================================================================================================================================================================================
// Tasca 7. Utilitza el mètode Date.now() per calcular quant de temps (en mil·lisegons) triga a executar-se el següent bucle:
const startTime = Date.now();

for (let i = 0; i < 100000; i++) {
    let doSomethng = i * i * i;
}

const endTime = Date.now();
const elapsedTime = endTime - startTime;
console.log(`El bucle tardo ${elapsedTime} milisegundos en ejecutarse.`);



// ==================================================================================================================================================================================================================================================================================================================================
// Tasca 8. Per què es printa false?
let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};

console.log(typeof(meetup)===typeof(JSON.stringify(meetup)));

Porque esta comparando dos tipos de datos diferentes: un objeto y una cadena, y typeof devuelve un resultado diferente para cada uno

 

// ==================================================================================================================================================================================================================================================================================================================================
// Tasca 9. Quina és la sortida? Per què?
let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}]
    
};

console.log(JSON.stringify(meetup,["participants"])); // Sortida:  {"participants":[{"name":"John"},{"name":"Alice"}]}

["participants"] indica que solo se debe incluir la propiedad participants en la cadena JSON resultante, omitiendo la propiedad title