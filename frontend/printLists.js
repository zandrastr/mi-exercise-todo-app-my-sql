let inputForm = document.getElementById('inputForm');

export let listDrop = document.createElement('select');
listDrop.id = 'listIdSelect';

export function printLists() {
    fetch('http://localhost:3000/lists')
    .then(res => res.json())
    .then(data => {
        console.log('lists:', data);

        data.map(list => {
            let dropItem = document.createElement('option');
            dropItem.value = list.listId;
            dropItem.innerText = list.listName;

            listDrop.append(dropItem);
        })
        inputForm.prepend(listDrop);
    })
}