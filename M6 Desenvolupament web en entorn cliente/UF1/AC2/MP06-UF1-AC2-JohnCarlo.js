// Tasca 1. Escriu una funció per sumar tots els salaris inclosos en un objecte salaries com aquest
// (l’objecte pot emmagatzemar un nombre indefinit de salaris):
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function sumSalaries(salaries) {
    let total = 0;
    for (let persona  in salaries) {
        total += salaries[persona];
    }
    return total;
}

console.log(sumSalaries(salaries)); // 390




// Tasca 2. Escriu un fragment de codi que demostri la diferència entre copiar un objecte:
// a) per referència
let obj1 = { name: "John Carlo" };
let obj2 = obj1;
obj2.name = "Meow";
console.log(obj1.name);  // Meow


// b) per clonat
let obj1 = { name: "John Carlo" };
let obj2 = Object.assign({}, obj1);
obj2.name = "Tilin";
console.log(obj1.name);  // John Carlo


// c) per clonat estructurat o recursiu
let obj1 = { name: "Carlo", address: { city: "España" } };
let obj2 = JSON.parse(JSON.stringify(obj1));
obj2.address.city = "Filipinas";
console.log(obj1.address.city);  // España





// Tasca 3. Donada aquesta família family:
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;  
    return {
        father: man,
        mother: woman
    };
}

let family = marry({ name: "John" }, { name: "Ann" });


// a) Què farà què esborrarà de memòria el garbage collector si fem:
Si hacemos family = null; el garbage collector eliminara a John y Ann de la memoria porque ya no hay ninguna referencia a ellos

// b) I si fem:
Si eliminamos family.father, John podria ser eliminado, pero Ann seguira en memoria. Si eliminamos family.mother, Ann podraa ser eliminada, pero John seguira en la memoria




// Tasca 5. 
function makeUser() {
    return { name: "John", ref: this };
}
let user makeUser();
console.log(user.ref);

// a) A quin objecte fa referència user.ref?
user.ref devuelvera undefined porque this no apunta al objeto user

// b) Com podríem fer que user.ref apunti sempre a user?
function makeUser() {
    let user = { name: "John" };
    user.ref = user;
    return user;
}





// Tasca 6. Crea una calculadora amb els mètodes read, sum i mul.
//     - read() demana dos valors i els desa com a propietats d'objecte amb noms a i b respectivament.
//     - sum() retorna la suma dels valors desats.
//     - mul() multiplica els valors desats i retorna el resultat.
// El mètode read() pot fer servir la funció predefinida prompt().

let calculator = {
    read() {
      this.a = +prompt("Introduce el primer numero:", 0);
      this.b = +prompt("Introduce el segundo numero:", 0);
    },

    sum() {
      return this.a + this.b;
    },

    mul() {
      return this.a * this.b;
    }
  };

  calculator.read();
  alert("Suma: " + calculator.sum());
  alert("Multiplicación: " + calculator.mul());





// Tasca 7. Heus aquí un objecte ladder que et permet anar amunt i avall:
let ladder = {
    step: 0,
    up() {
        this.step++; 
    },
    down() {
        this.step--;
    },
    showStep: function () {
        alert(this.step);
    }
};
// Si hem de fer diverses crides sequencialment, les fem així:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
ladder.down();
ladder.showStep();


// Modifica les funcions up, down i showStep perquè es puguin fer les crides encadenades, així:
ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0



// Tasca 8. Per què str.test retorna undefined?




// Tasca 9. Per què aquest bucle és infinit?




// Tasca 9. Escriu una funció checkSpam(str) que retorni true si str conté ‘viagra’ o ‘XXX’, i false en cas
// contrari.




// Tasca 10. Escriu una funció formatDate(date) que formategi date de la següent manera:
// • Si des de date ha passat menys d'1 segon, retornarà "right now".
// • En cas contrari, si des de date ha passat menys d'1 minut, retornarà "n sec. ago".
// • En cas contrari, si és menys d'una hora, reornarà "m min. ago".
// • En cas contrari, retornarà la data completa en el format "DD.MM.YY HH:mm". És a
// dir: "day.month.year hours:minutes", tot en format de 2 dígits, p . ex 31.12.16 10:00.




// Tasca 11. a) Utilitza el mètode Date.now() per calcular quant de temps (en mil·lisegons) triga a
// executar-se el següent bucle:




// b)Per fer un bechmarking més complet, programa una funció que faci la mesura N vegades i promitgi
// els resultats.
