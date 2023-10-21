function renderTodos(container, todos) {
    for (let todo of todos) {
        let todoEl = document.createElement('li');
        todoEl.textContent = `Id: ${todo.id}, Description: ${todo.description}, Status: ${todo.status}`;
        container.appendChild(todoEl); 
    }
}

export {
    renderTodos,
}