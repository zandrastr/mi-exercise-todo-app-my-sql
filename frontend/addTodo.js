import printTodos from "./printTodos.js";

let saveTodoName = document.getElementById('saveTodoName');
let saveTodoBtn = document.getElementById('saveTodoBtn');

export default saveTodoBtn.addEventListener('click', () => {
    console.log('click:', saveTodoName.value)

    fetch('http://localhost:3000/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({newTodoName: saveTodoName.value, newTodoList: 1})
    })
    .then(res => res.json())
    .then(data => {
        console.log('create item:', data);
        printTodos();
    })
})