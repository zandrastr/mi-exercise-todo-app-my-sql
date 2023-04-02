import todoSaveDone from "./todoSaveDone.js";
import {listDrop} from "./printLists.js"

let root = document.getElementById('root');

listDrop.addEventListener('change', (e) => {
    console.log('change list:', e.target.value);
    printTodos(e.target.value)
})

export default function printTodos(list) {

    if (!list) {
        list = 1;
    }
    
    fetch('http://localhost:3000/items/' + list)
    .then(res => res.json())
    .then(data => {
        console.log('items:', data);

        let ul = document.createElement('ul');

        data.map(task => {
            let li = document.createElement('li');
            li.innerText = task.itemName;
            li.id = task.itemId;

            li.addEventListener('click', () => {
                todoSaveDone(li.id, listDrop.value);
            })

            ul.append(li);
        })

        root.innerHTML = '';
        root.append(ul);
    })
}
