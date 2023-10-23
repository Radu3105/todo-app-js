function renderTodos(container, todos) {
    for (let todo of todos) {
        let todoEl = document.createElement('li');
        todoEl.textContent = `Id: ${todo.id}, Description: ${todo.description}, Status: ${todo.status}`;
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