// Generators 
// Simplificam a criação de iteráveis, gerando-as para você.

function normalFunction() {

    console.log('Hello');
    console.log('World');

}

// Função especial!
function* generatorFunction() {

    // Keyword para pausar execução. Um generator não retorna algo, ele produz algo
    yield 'Hello'
    yield 'World'
    
}

// Generators sempre retornam um generatorObject que é um iterador
const generatorObject = generatorFunction()

for (const word of generatorObject) {
    console.log(word);
}