function renderTodos(container, todos, todoListInstance) {
    for (let todo of todos) {
        let todoEl = document.createElement('div');
        todoEl.classList.add('todo');
        
        let todoDetails = document.createElement('div');
        todoDetails.classList.add('todo-details');

        todoEl.addEventListener('mouseenter', () => {
            renderTodoOptions(todoEl, todoListInstance, todo.id);
        });

        todoEl.addEventListener('mouseleave', () => {
            todoEl.removeChild(document.querySelector('#todo-button-group'));
        });

        let todoDescription = document.createElement('p');
        todoDescription.classList.add('todo-description');
        todoDescription.textContent = todo.description;
        todoDetails.appendChild(todoDescription);

        if (todo.priority !== 'None') {
            let todoPriority = document.createElement('p');
            todoPriority.textContent = 'Priority: ';

            let todoPrioritySpan = document.createElement('span');
            switch (todo.priority) {
                case 'Low':
                    todoPrioritySpan.textContent = 'Low';
                    todoPrioritySpan.style.color = 'green';
                    break;
                case 'Medium':
                    todoPrioritySpan.textContent = 'Medium';
                    todoPrioritySpan.style.color = 'orange';
                    break;
                case 'High':
                    todoPrioritySpan.textContent = 'High';
                    todoPrioritySpan.style.color = 'red';
                    break;
            }
            todoPriority.appendChild(todoPrioritySpan);
            todoDetails.appendChild(todoPriority);
        }
        todoEl.appendChild(todoDetails);
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

    modifyBtn.addEventListener('click', () => {
        let todoContainer = modifyBtn.parentElement.parentElement;
        renderEditForm(todoContainer, todoListInstance, todoId);
        removeOptionButtonsContainer(buttonGroup);
    });
}

function renderCardForm(container) {
    let formContainer = document.createElement('form');
    formContainer.classList.add('card-form');
    
    let formDescriptionLabel = document.createElement('label');
    formDescriptionLabel.textContent = 'Description: ';

    let formDescriptionInput = document.createElement('input');
    formDescriptionInput.id = 'card-form-description';
    formDescriptionInput.type = 'text';
    formDescriptionInput.placeholder = 'Type in a description';

    let formPriorityLabel = document.createElement('label');
    formPriorityLabel.textContent = 'Priority: ';

    let formPrioritySelectInput = document.createElement('select');
    formPrioritySelectInput.id = 'card-form-priorities';

    let formPrioritySelectOptionNone = document.createElement('option');
    formPrioritySelectOptionNone.value = 'None';
    formPrioritySelectOptionNone.textContent = 'None';

    let formPrioritySelectOptionLow = document.createElement('option');
    formPrioritySelectOptionLow.value = 'Low';
    formPrioritySelectOptionLow.textContent = 'Low';

    let formPrioritySelectOptionMedium = document.createElement('option');
    formPrioritySelectOptionMedium.value = 'Medium';
    formPrioritySelectOptionMedium.textContent = 'Medium';

    let formPrioritySelectOptionHigh = document.createElement('option');
    formPrioritySelectOptionHigh.value = 'High';
    formPrioritySelectOptionHigh.textContent = 'High';

    let formButtonGroup = document.createElement('div');
    formButtonGroup.classList.add('form-btn-group');

    let formContainerSubmitBtn = document.createElement('button');
    formContainerSubmitBtn.id = 'card-form-submit';
    formContainerSubmitBtn.textContent = 'Submit';

    let formContainerCancelBtn = document.createElement('button');
    formContainerCancelBtn.id = 'card-form-cancel';
    formContainerCancelBtn.textContent = 'Cancel';

    formDescriptionLabel.appendChild(formDescriptionInput);

    formPriorityLabel.appendChild(formPrioritySelectInput);

    formPrioritySelectInput.appendChild(formPrioritySelectOptionNone);
    formPrioritySelectInput.appendChild(formPrioritySelectOptionLow);
    formPrioritySelectInput.appendChild(formPrioritySelectOptionMedium);
    formPrioritySelectInput.appendChild(formPrioritySelectOptionHigh);

    formButtonGroup.appendChild(formContainerSubmitBtn);
    formButtonGroup.appendChild(formContainerCancelBtn);

    formContainer.appendChild(formDescriptionLabel);
    formContainer.appendChild(formPriorityLabel);
    formContainer.appendChild(formButtonGroup);

    container.appendChild(formContainer);
}

function renderEditForm(container, todoListInstance, todoId) {
    let editForm = document.createElement('form');
    let descriptionInput = document.createElement('input');
    let submitBtn = document.createElement('button');

    container.removeChild(container.children[0]);

    let todo = todoListInstance.getById(todoId);

    let formDescriptionLabel = document.createElement('label');
    formDescriptionLabel.textContent = 'Description: ';

    descriptionInput.type = 'text';
    descriptionInput.value = todo.description;

    formDescriptionLabel.appendChild(descriptionInput);

    let formPriorityLabel = document.createElement('label');
    formPriorityLabel.textContent = 'Priority: ';

    let formPrioritySelectInput = document.createElement('select');
    formPrioritySelectInput.id = 'card-form-priorities';
    formPrioritySelectInput.value = todo.priority;

    let formPrioritySelectOptionNone = document.createElement('option');
    formPrioritySelectOptionNone.value = 'None';
    formPrioritySelectOptionNone.textContent = 'None';

    let formPrioritySelectOptionLow = document.createElement('option');
    formPrioritySelectOptionLow.value = 'Low';
    formPrioritySelectOptionLow.textContent = 'Low';

    let formPrioritySelectOptionMedium = document.createElement('option');
    formPrioritySelectOptionMedium.value = 'Medium';
    formPrioritySelectOptionMedium.textContent = 'Medium';

    let formPrioritySelectOptionHigh = document.createElement('option');
    formPrioritySelectOptionHigh.value = 'High';
    formPrioritySelectOptionHigh.textContent = 'High';

    editForm.appendChild(formDescriptionLabel);
    
    formPrioritySelectInput.appendChild(formPrioritySelectOptionNone);
    formPrioritySelectInput.appendChild(formPrioritySelectOptionLow);
    formPrioritySelectInput.appendChild(formPrioritySelectOptionMedium);
    formPrioritySelectInput.appendChild(formPrioritySelectOptionHigh);
    
    for (const option of formPrioritySelectInput.children) {
        if (option.textContent === todo.priority) {
            option.setAttribute('selected', true);
            break;
        }
    }

    formPriorityLabel.appendChild(formPrioritySelectInput);
    
    editForm.classList.add('edit-form');
    editForm.appendChild(formPriorityLabel);
    
    let formStatusLabel = document.createElement('label');
    formStatusLabel.textContent = 'Status: ';

    let formStatusSelectInput = document.createElement('select');
    formStatusSelectInput.id = 'card-form-status';
    formStatusSelectInput.value = todo.status;
    // TODO: Add default selected value to be the current status of the todo.

    let formStatusSelectOptionToDo = document.createElement('option');
    formStatusSelectOptionToDo.value = 'To Do';
    formStatusSelectOptionToDo.textContent = 'To Do';

    let formStatusSelectOptionInProgress = document.createElement('option');
    formStatusSelectOptionInProgress.value = 'In Progress';
    formStatusSelectOptionInProgress.textContent = 'In Progress';

    let formStatusSelectOptionComplete = document.createElement('option');
    formStatusSelectOptionComplete.value = 'Complete';
    formStatusSelectOptionComplete.textContent = 'Complete';

    formStatusSelectInput.appendChild(formStatusSelectOptionToDo);
    formStatusSelectInput.appendChild(formStatusSelectOptionInProgress);
    formStatusSelectInput.appendChild(formStatusSelectOptionComplete);

    for (const option of formStatusSelectInput.children) {
        if (option.textContent === todo.status) {
            option.setAttribute('selected', true);
            break;
        }
    }

    formStatusLabel.appendChild(formStatusSelectInput);

    editForm.appendChild(formStatusLabel);

    submitBtn.type = 'submit';
    submitBtn.textContent = 'Submit';
    editForm.appendChild(submitBtn);

    editForm.addEventListener('submit', () => {
        todoListInstance.update(todoId, descriptionInput.value, formStatusSelectInput.value, formPrioritySelectInput.value);
    });

    container.appendChild(editForm);    
}

function removeAddButton(container) {
    container.remove();
}

function removeOptionButtonsContainer(container) {
    container.remove();
}

export {
    renderTodos,
    renderCardForm,
    renderEditForm,
    removeAddButton,
}