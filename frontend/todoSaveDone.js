import printTodos from "./printTodos.js";

export default function todoSaveDone(id) {
    console.log('save as done:', id);

    fetch('http://localhost:3000/done/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({itemId: id})
    })
    .then(res => res.json())
    .then(data => {
        console.log('saved as done:', data);
        printTodos();
    })
}