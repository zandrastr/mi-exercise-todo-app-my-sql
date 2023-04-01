let root = document.getElementById('root');

export default function printTodos() {
    
    fetch('http://localhost:3000/items')
    .then(res => res.json())
    .then(data => {
        console.log('items:', data);

        let ul = document.createElement('ul');

        data.map(task => {
            let li = document.createElement('li');
            li.innerText = task.itemName;
            li.id = task.itemId;

            ul.append(li);
        })

        root.append(ul);
    })
}
