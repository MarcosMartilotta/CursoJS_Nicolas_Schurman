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