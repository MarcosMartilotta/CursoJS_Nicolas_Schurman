// spread operator. 
// si tengo una constante a y digo const b = a asignara a b todo lo que tenga a
//pero el problema es que si cambio b a tambien cambiara
// para que no ocurra tengo que poner
// const b = { ...a } lo que significa que copie todo lo que tiene a pero que sea independiente de esta variable 

//promesas

Promise.resolve(2) //si pongo reject va a fracazar con el nivel de 2 y hacemos que se salte todos los then y salte directamente al catch. Si no tengo el catch tira error porque no fue capturado
    .then(valor => valor = 1)
    .then(valor => console.log(valor)) //la promesa se va a resolver cuando sea 2. Lo que voy a tener luego son acciones que se pueden ir encadenando hasta que se cumpla la misma
    .catch(e => console.error(e)) //recibe un mensaje de error
    //esto sirve para llamar apis

    // si en un then pongo 
    // .then(valor => Promise.reject(1)) por ejemplo, voy a interrumpir la cadena de promesas en ese then y va a darme error con el valor que tenga en ese momento
    //el resolve es el valor que va a devolver la promesa

    //promesa de manera asincrona

    new Promise( (resolve, reject) => {
        setTimeout(() => resolve(2), 1000) // le indico que la resuelva despues de un segundo con el valor de 2
    })                                     //Si llega a fallar puedo poner reject
    .then(x => console.log(x)) //en x tomo el valor de la resolucion de la promesa y lo imprimo
    .catch(e => console.error(e))