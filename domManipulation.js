function renderTodos(container, todos) {
    for (let todo of todos) {
        let todoEl = document.createElement('div');
        todoEl.classList.add('todo');

        let todoDescription = document.createElement('p');
        todoDescription.textContent = todo.description;
        todoEl.appendChild(todoDescription);

        container.appendChild(todoEl); 
    }
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