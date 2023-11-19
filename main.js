
// Nested Function Scope
/*let a = 10

function outer() {

    let b = 20

    function inner() {

        let c = 30  

        // Lexical scoping:
        // Uma função nested(aninhada) procura variáveis em escopo decrescente. Ou seja, a cada vez que não encontra a variável no escopo presente procura em um escopo acima. Ex: Primeiro procura no escopo inner(), depois no outer() e finalmente no escopo global.
        console.log(a, b, c)

    }
    
    inner()

}

outer()
*/
// Closures
// In javascript, when we return a function from another function, we are effectively returning a combination of the function defition along with th function's scope. This would let the function definition have an associated persistent memory which could hold on to live data between executions. That combination of the function and it's scope chain is what is called a closure in JavaScript.

/*function outer() {

    let counter = 0

    function inner() {

        counter++
        console.log(counter);

    }
    // retorna a função inner assim como o contexto de escopo da função. Ou seja, a o valor da variável persiste com eventuais chamadas da função outer. Lembrando o valor da variável 'counter'
    return inner
}
const fn = outer()
fn()
fn()
*/

// Function Currying
// Currying is a process in fucntion programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time.
// Não chama um função apenas a transforma!
//Ex: function f(a,b,c) é transformado em f(a)(b)(c)

/*function sum(a, b, c) {

    return a + b + c

}

console.log(sum(2,3,5));

function curry(fn) {

    return function(a) {

        return function(b) {

            return function(c) {

                return fn(a, b, c)

            }

        }

    }

}

const curriedSum = curry(sum)
console.log(curriedSum(2)(3)(5));

const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)
console.log(add5);
*/

