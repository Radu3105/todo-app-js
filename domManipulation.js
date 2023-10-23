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
    buttonGroup.id = 'todo-button-group';
    let modifyBtn = document.createElement('button');
    modifyBtn.id = 'todo-modify-btn';
    modifyBtn.classList.add('todo-option-btn');
    modifyBtn.textContent = 'M';
    let removeBtn = document.createElement('button');
    removeBtn.id = 'todo-remove-btn';
    removeBtn.classList.add('todo-option-btn');
    removeBtn.textContent = 'R';
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

    formContainer.appendChild(formDescriptionInput);
    formContainer.appendChild(formContainerSubmitBtn);

    container.appendChild(formContainer);
}

export {
    renderTodos,
    renderCardForm,
}