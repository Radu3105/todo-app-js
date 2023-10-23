function renderTodos(container, todos, todoListInstance) {
    for (let todo of todos) {
        let todoEl = document.createElement('div');
        todoEl.classList.add('todo');
        
        todoEl.addEventListener('mouseenter', () => {
            renderTodoOptions(todoEl, todoListInstance, todo.id);
        });

        todoEl.addEventListener('mouseleave', () => {
            todoEl.removeChild(document.querySelector('#todo-button-group'));
        });

        let todoDescription = document.createElement('p');
        todoDescription.textContent = todo.description;
        todoEl.appendChild(todoDescription);

        container.appendChild(todoEl); 
    }
}

function renderTodoOptions(container, todoListInstance, todoId) {
    let buttonGroup = document.createElement('div');
    let modifyBtn = document.createElement('button');
    let modifyIcon = document.createElement('img');
    let removeBtn = document.createElement('button');
    let removeIcon = document.createElement('img');

    buttonGroup.id = 'todo-button-group';
    modifyBtn.id = 'todo-modify-btn';
    modifyBtn.classList.add('todo-option-btn');
    modifyIcon.src = './assets/icons/modify.png';
    modifyIcon.classList.add('todo-option-btn-img');
    modifyBtn.appendChild(modifyIcon);
    removeBtn.id = 'todo-remove-btn';
    removeBtn.classList.add('todo-option-btn');
    removeIcon.src = './assets/icons/remove.png';
    removeIcon.classList.add('todo-option-btn-img');
    removeBtn.appendChild(removeIcon);
    buttonGroup.appendChild(modifyBtn);
    buttonGroup.appendChild(removeBtn);
    
    container.appendChild(buttonGroup);

    removeBtn.addEventListener('click', () => {
        todoListInstance.remove(todoId);
    });
}

function renderCardForm(container) {
    let formContainer = document.createElement('form');
    formContainer.classList.add('card-form');
    
    let formDescriptionInput = document.createElement('input');
    formDescriptionInput.id = 'card-form-description';
    formDescriptionInput.type = 'text';
    formDescriptionInput.placeholder = 'Enter description';

    let formContainerSubmitBtn = document.createElement('button');
    formContainerSubmitBtn.id = 'card-form-submit';
    formContainerSubmitBtn.textContent = 'Submit';

    let formContainerCancelBtn = document.createElement('button');
    formContainerCancelBtn.id = 'card-form-cancel';
    formContainerCancelBtn.textContent = 'Cancel';

    formContainer.appendChild(formDescriptionInput);
    formContainer.appendChild(formContainerSubmitBtn);
    formContainer.appendChild(formContainerCancelBtn);

    container.appendChild(formContainer);
}


function removeAddButton(container) {
    container.remove();
}

export {
    renderTodos,
    renderCardForm,
    removeAddButton,
}