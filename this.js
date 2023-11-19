// this keyword
//  The JavaScript this keyword which is used in a function, refers to the object it belongs to. it makes functions reusable by letting you decide the object value. this value is determined entirely by how a function is called

function sayMyname(name) {

    console.log(`My name is ${name}`);

}

// How to determine 'this'?
//
// 1) Implicit binding
// 2) Explicit binding
// 3) New binding
// 4) Default binding

// 1) Implicit binding
const person = {

    name: 'Nilvo',
    sayMyName: function() {

        console.log(`My name is ${this.name}`);

    }

}

// Quando uma função é invocada através da dot-notation o objeto a esquerda da função é o que o 'this' dentro da função referencia
person.sayMyName()

// 2) Explicit binding
function sayMyname() {

    console.log(`My name is ${this.name}`);

}

// Nesse caso o 'this' referencia o objeto passado como o primeiro argumento dessa função. Toda função possuí o metodo .call()
sayMyname.call(person)

// 3) New binding
function Person(name) {

    // Ao criar um construtor o javascript, nos bastidores, cria um novo objeto vazio, que então será preenchido com atributos através do this.atributo = atributo
    // this = {}
    this.name = name

}

const p1 = new Person('Nilve') // Constructor function
const p2 = new Person('Nilvu')

console.log(p1.name, p2.name);

// 4) Default binding
// É o ultimo caso, se nenhum dos outros 3 se aplicarem esse será a determinação vigente.

// Nesse caso o javascript vai procurar no escopo global uma variável name, como não a encontra, retorna 'undefined'. O contexto de this vira o contexto global!
globalThis.name = 'Superman'
sayMyname()

// Order of precedence
// 
// 1| New binding
// 2| Explicit binding
// 3| Implicit binding
// 4| Default binding