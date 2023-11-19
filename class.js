
// Class keyword
class Person {

    constructor(fName, lName) {

        this.firstName = fName
        this.lastName = lName

    }

    sayMyName() {

        return `${this.firstName} ${this.lastName}`

    }

}

const person1 = new Person('Nilvo', 'Delgado')
console.log(person1.sayMyName());

class SuperHero extends Person {

    constructor(fName, lName) {
        
        super(fName, lName)
        this.isSuperHero = true
    }   

    fightCrime() {

        console.log('Fighting crime!');

    }
}

const batman = new SuperHero('Nilvo', 'Delgado')
console.log(batman.sayMyName());