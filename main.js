import TodoList from "./todo.js";
import { loadFromLocalStorage } from "./localStorageHelpers.js";
import { renderTodos, removeAddButton, renderCardForm } from "./domManipulation.js";

const todoEl = document.querySelector('#state-to-do');
const inProgressEl = document.querySelector('#state-in-progress');
const completeEl = document.querySelector('#state-complete');
const todoAddBtnEl = document.querySelector('#add-to-do');
const inProgressAddBtnEl = document.querySelector('#add-in-progress');
const completeAddBtnEl = document.querySelector('#add-complete');
const clearAllBtn = document.querySelector('#clear-all');
const cardForm = document.querySelector('#card-form');
const todoListEl = document.querySelector('#to-do-list');
const inProgressListEl = document.querySelector('#in-progress-list');
const completeListEl = document.querySelector('#complete-list');
const todoRemoveBtn = document.querySelector('#todo-remove-btn');

// Check if todos exist in the localStorage and populate the new instance of TodoList with them.
// If not, create a new instance of TodoList with empty items
const todoList = loadFromLocalStorage('todos') ? new TodoList(loadFromLocalStorage('todos')) : new TodoList();

// Render todos based on their status
renderTodos(todoListEl, todoList.items.filter((item) => item.status === 'to do'), todoList);
renderTodos(inProgressListEl, todoList.items.filter((item) => item.status === 'in progress'), todoList);
renderTodos(completeListEl, todoList.items.filter((item) => item.status === 'complete'), todoList);

todoAddBtnEl.addEventListener('click', () => {
    renderCardForm(todoEl);
    const cardFormSubmitBtn = document.querySelector('#card-form-submit');
    cardFormSubmitBtn.addEventListener('click', () => {
        const cardFormDesriptionInput = document.querySelector('#card-form-description');
        const cardFormPriorityInput = document.querySelector('#card-form-priorities');
        todoList.add(cardFormDesriptionInput.value, 'to do', cardFormPriorityInput.value);
    });
    removeAddButton(todoAddBtnEl);
});

inProgressAddBtnEl.addEventListener('click', () => {
    renderCardForm(inProgressEl);
    const cardFormSubmitBtn = document.querySelector('#card-form-submit');
    cardFormSubmitBtn.addEventListener('click', () => {
        const cardFormDesriptionInput = document.querySelector('#card-form-description');
        const cardFormPriorityInput = document.querySelector('#card-form-priorities');
        todoList.add(cardFormDesriptionInput.value, 'in progress', cardFormPriorityInput.value);
    });
    removeAddButton(inProgressAddBtnEl);
});

completeAddBtnEl.addEventListener('click', () => {
    renderCardForm(completeEl);
    const cardFormSubmitBtn = document.querySelector('#card-form-submit');
    cardFormSubmitBtn.addEventListener('click', () => {
        const cardFormDesriptionInput = document.querySelector('#card-form-description');
        const cardFormPriorityInput = document.querySelector('#card-form-priorities');
        todoList.add(cardFormDesriptionInput.value, 'complete', cardFormPriorityInput.value);
    });
    removeAddButton(completeAddBtnEl);
});

clearAllBtn.addEventListener('click', () => {
    todoList.clear();
});

console.log(todoList);