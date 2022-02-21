window.onload = () => { //Para que cargue primero la pagina y despues el js. Con poner la etiqueta de script a lo ultimo ya está pero así es como doble asegurarse.
    const parrafo = document.getElementById('text')
    //console.log(parrafo.innerHTML) //.innterHTML sirve para acceder al contenido de toda la etiqueta y no a toda la etiqueta en si. Tambien sirve innerTEXT
    //parrafo.innerText = 'Texto actualizado' //COn esto cambio el contenido del html que muestro
    parrafo.innerHTML = '<li>elemento 1</li><li>elemento 2</li>'
}

