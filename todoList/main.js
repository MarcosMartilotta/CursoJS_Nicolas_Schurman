const todos = []

window.onload = () => { 
    const form = document.getElementById('todo-form'); //Me posiciono en el formulario
    form.onsubmit = (e) => { //creo una fat function que con onsubmit toma el comportamiento del boton
        e.preventDefault(); //Prevengo de que se actualice la pagina
        const todo = document.getElementById('todo'); //Tomo lo que escribo en el input
        const todoText = todo.value; //Tomo el texto que tiene
        todo.value = ''; //Borro lo que dice en el texto
        todos.push(todoText); //Pusheo a la lista todos el contenido de totoText
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = ''; //vacío la lista cada vez que agrego un elemento

    }
}

