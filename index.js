var inputField = document.getElementById('todo-input-field');
var todoList = document.getElementById('todo-list');

function createTodoList(msg){
    var maincard= document.createElement('div');
    maincard.className = 'todo-item';
    maincard.id= 'todo' + (todoList.childElementCount +1);
    var message = document.createElement('h3');
    console.log(message);
    message.innerHTML = msg;
    message.className = 'todo-message';
    maincard.appendChild(message); 
    
    var deleteIcon = document.createElement('i');
    deleteIcon.className = 'fas fa-trash-alt';

    deleteIcon.onclick = function() {
        // alert('Delete Icon was clicked for Element with ID => ' +  mainCard.id);

        var selectedElem = document.getElementById(mainCard.id);
        selectedElem.remove();
    }

    mainCard.appendChild(deleteIcon);

    return mainCard;
}

inputField.onkeyup = function(e) {
    console.log(e.key)
    if(e.key === 'Enter') {
        var inputValue = e.target.value;

        // todoList.appendChild(createTODOCard(inputValue));

        var newCard = createTODOCard(inputValue);
        var firstElem = todoList.firstElementChild;
        todoList.insertBefore(newCard, firstElem);
        e.target.value = '';
    }
}

var btnAddTODO = document.getElementById('btn-add-todo');
btnAddTODO.onclick = function(e) {
    // console.log(e.target);
    console.log(inputField.value);

    var newCard = createTODOCard(inputField.value);
    var firstElem = todoList.firstElementChild;

    todoList.insertBefore(newCard, firstElem);
    inputField.value = '';
}