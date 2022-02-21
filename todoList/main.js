const todos = JSON.parse(localStorage.getItem('todos')) || []; //si no tiene items en el local storage busca asigna un arreglo vacio
            // esto del JSON.parse es porque en todos quiero guardar elementos JS y si no lo hago son arrays nada mas
const render = () => {
    const todoList = document.getElementById('todo-list');
    const todosTemplate = todos.map(t => '<li>' + t + '</li>'); //La podemos leer como que a todos agregale li concatenado con t concatenado con el cierre de li por cada vez que se apreta el boton en este caso
    todoList.innerHTML =  todosTemplate.join('')
    const elementos = document.querySelectorAll('#todo-list li')// permite ir a buscar un elemento cualquiera no solo por su id
    elementos.forEach((elemento, i) => { //esto seria por cada elemeto del arreglo elementos, hacer tal cosa. en este caso imprimir
        elemento.addEventListener('click', () => {
            elemento.parentNode.removeChild(elemento)
            todos.splice(i, 1) //indico el indice y la cantidad de elementos que quiero eliminar
            actualizaTodos(todos)
            render() //uso recursividad para que no se desincronice el indice de mi lista con lo que estoy mostrando
        })
    })
}

const actualizaTodos = (todos) => {
    const todoStrings = JSON.stringify(todos)
    localStorage.setItem('todos', todoStrings)
}

window.onload = () => { 
    render()
    const form = document.getElementById('todo-form'); //Me posiciono en el formulario
    form.onsubmit = (e) => { //creo una fat function que con onsubmit toma el comportamiento del boton
        e.preventDefault(); //Prevengo de que se actualice la pagina
        const todo = document.getElementById('todo'); //Tomo lo que escribo en el input
        const todoText = todo.value; //Tomo el texto que tiene
        todo.value = ''; //Borro lo que dice en el texto
        todos.push(todoText); //Pusheo a la lista todos el contenido de totoText
        actualizaTodos(todos)
        render()
    }
}


//todoList.innerHTML = ''; //vacío la lista cada vez que agrego un elemento porque sino cada vez que recorra el for se van a duplicar, triplicar etc. los elementos
//for (let i = 0; i < todos.length; i++) {
//    todoList.innerHTML += '<li>' + todos[i] + '</li>'
//}
//const todosTemplate = todos.map(t => { //la funcion de map transforma el elemento en lo que nosotros retornemos de la funcion
//    return '<li>' + t + '</li>'
//})