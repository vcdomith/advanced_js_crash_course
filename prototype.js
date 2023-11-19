
// Prototype

// Constructor function
// function Person(fName, lName) {

//     this.firstName = fName
//     this.lastName = lName
// }


// const person1 = new Person('Nilvo', 'Delgado')
// const person2 = new Person('Nilve', 'Delgade')
// const person3 = new Person('Nilva', 'Delgada')

// JavaScript é uma linguagem dinâmica, ou seja, ela nos permite atrelar novas propriedades a um objeto a qualquer momento.
// person1.getFullName = function () {

//     return `${this.firstName} ${this.lastName}`

// }


// Para que se tenha um metodo aberto para todos os objetos criados a partir da função Person() usa-se prototype.
// Toda função tem uma propriedade chamada .prototype que aponta para um objeto

// Person.prototype.getFullName = function () {

//     return `${this.firstName} ${this.lastName}`

// }

// console.log(person2.getFullName());

// Prototypal Inheritance

function Person(fName, lName) {

    this.firstName = fName
    this.lastName = lName

}
Person.prototype.getFullName = function () {

    return `${this.firstName} ${this.lastName}`

}

function SuperHero(fName, lName) {
    
    // this = {}
    Person.call(this, fName, lName)
    this.isSuperero = true

}

SuperHero.prototype.fightCrime = function () {

    console.log('Fighting crime!');

}

SuperHero.prototype = Object.create(Person.prototype)

const batman = new SuperHero('Nilvo', 'Delgado')
SuperHero.prototype.constructor = SuperHero

console.log(batman.getFullName());
