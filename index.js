console.log('Hola Mundo')

// Tipos de datos en JS
//String, van entre '', Boolean: true o false, Null: valor nulo, Number: Cualquier numero que querramos describir
//Undefined: es una variable que no se encuentra definida
//Objet: objeto, el cual tiene cualquier cominacion de los tipos de datos de mas arriba, es una estructura

//Variables
//Podemos definirlas como 
//var: es la forma antigua de definirla en JS. Va al inicio del archivo
//let: le indicamos a js que el texto que vamos a escribir luego es una variable, sin necesidad de saber que valor contiene luego
//const
/*
let miPrimeraVariable = 'Mi primera variable'
console.log(miPrimeraVariable)

miPrimeraVariable = 'Esto ha cambiado'
console.log(miPrimeraVariable)
//a esto se le llama mutabilidad, cuando le cambiamos el valor a una variable

let miBoolean = true
let miOtroBool = false

let miNumero = 0
let miNumero2 = 12
let miNumero3 = -258 
//Las variables en JS tienen la particularidad de que el nombre debe empezar con una letra del alfabeto, luego puedo poner numeros y mas letras

console.log(miNumero, miNumero2, miNumero3, miBoolean, miOtroBool)

let undef
console.log(undef)

let nulo = null
console.log('nulo', nulo) // null va a aparecer con esa palabra siemre

//Objetos 
//Un objeto es un agrupacion de datos, que hacen sentido entre si

const miPrimerObjeto = {} //es un objeto vacio

//Un objeto por ejemplo puede ser un usuario
const miObjeto = {
    unNumero: 12,
    unString: 'Esta cadena de caracteres',
    unaCondicion: true, //es una buena practica poner esta coma aunque no sea necesario
}

console.log(miObjeto.unNumero) //si pongo .propiedad me imprime esa propiedad y no todo el objeto

// arreglos,las listas pero que soportan distintos tipos de datos

const arrVacio = []
const arr = [1, 2, 'Hola', 'Mundo']

console.log(arrVacio, arr)

arr.push(5) //agrega el elemento 5 al arreglo que cree

//Operaciones matematicas

const suma = 1 + 2
const restar = 1 - 2
const multiplicar = 2 * 3
const division = 9 / 3 
const modulo = 10 % 3 // retorna el resto 

let num = 5 // aca no podemos usar const, hay que usar let porque const no puede cambiar
num++ //incrementa en 1 el valor de num
num++ //incrementa en 1 el valor de num
num++ //incrementa en 1 el valor de num
num++ //incrementa en 1 el valor de num
num++ //incrementa en 1 el valor de num
num--

num += 3 
num -= 2
num *= 5
num /= 2
console.log(num)

// si defino con const un objeto solo puedo cambiar sus propiedades pero no el objeto entero

// operadores de comparacion

const resultado1 = 5 === 6 //evaluo si es exactamente igual al numero 6 
const resultado2 = 5 == '5' //no estrictamente igual, puedo comparar strings con numbers. Es una sutileza del lenguaje
console.log(resultado1)     //basicamente permite que los datos no sean del mismo tipo y que siga funcionando 


const resultado3 = 5 < 5
const resultaedo4 = 5 <= 5
const resultado6 = 5 <=6

const resultado7 = 5 !== 6 //Estrictamente desigual a 6 si aca pongo un '5' no va a funcar, abajo si
const resultado = 5!= '5' //no estrictamente desigual 

console.log(resultado3)


// operadores logicos or || , and &&, not !

const resultadoNot = !true // va a dar vuelta el valor de true y lo va a dejar como false
const resultadoOr = false || false || 'Hola' || 'Mundo' // mundo no me lo imprime porque toma hasta el primer valor true, y true pueden ser numeros, booleans o strings, en and va a buscar valores hasta el primer false
*/

//control de flujo if y else
/*
if (true) {
    console.log('Estoy dentro de un if')
} else {
    console.log('El niño no puede jugar')
}
*/

//control de flujo, while
/*
let x = 0
while (x < 5) {
    console.log(x)
    x++
}
*/

//control de flujo - switch

/*
switch (1) {
    case 1: {
        console.log('Soy el caso 1')
        break;
    }
    case 2: {
        console.log('Soy el caso 2')
        break;
    }
    case 3: 
        console.log('Soy el caso 3')
        break;
    default:
        console.log('Soy el caso por defecto')
        break;
}

*/

//Bucle de for
/*
for (let i = 0; i < 10; i++) {
    console.log(i)
}
*/
/*
console.log(numeros[0]) //Accedo al elemento en la posicion 0
const numeros=[1,2,'hola',4,5]

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}  
*/
//funciones

/*
function iterar(arg1) {
    for (let i = 0; i < arg1.length; i++) {
        console.log(arg1[i])
    }  
}  

const numeros=[1,2,'hola',4,5]
const nombres=['felipe', 'juan', 'lalal']
iterar(numeros)
iterar(nombres)
*/

//funciones con parametros 
/*
function suma(a, b) {
    return a + b;
}

const resultadoSuma1 = suma(1,2)

console.log('resultado', resultadoSuma1)
*/

function sumar(a, b, cb) {
    const r = a + b;
    cb(r)
}

function callback(result) {
    console.log('resultado', result)
}

sumar(2, 3, callback) //Le paso una funcion a otra funcion, en vez de llamarla directo adentro

//en js las funciones tambien cumplen la funcion de ser valores

// fat arrow function, sirve para funciones cortas y no hace falta explicitar el return

const miFatArrowFunction = (a, b) => a + b
//const r = miFatArrowFunction(1, 2)

const otraFAF = (a, b) => {
    return a + b
}

const r = otraFAF(1, 2)
console.log(r)

// Funciones anonimas

sumar(2, 3, function (r){
    console.log('El resultado de mi funcion anonima es',r)
})
