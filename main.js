import TodoList from "./todo.js";
import CardFormHandler from "./cardFormHandler.js";
import { loadFromLocalStorage } from "./localStorageHelpers.js";
import { renderTodos } from "./domManipulation.js";

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

// Check if todos exist in the localStorage and populate the new instance of TodoList with them.
// If not, create a new instance of TodoList with empty items
const todoList = loadFromLocalStorage('todos') ? new TodoList(loadFromLocalStorage('todos')) : new TodoList();

const cardFormHandler = new CardFormHandler();

// Render todos based on their status
renderTodos(todoListEl, todoList.items.filter((item) => item.status === 'to do'));
renderTodos(inProgressListEl, todoList.items.filter((item) => item.status === 'in progress'));
renderTodos(completeListEl, todoList.items.filter((item) => item.status === 'complete'));

todoAddBtnEl.addEventListener('click', () => {
    cardFormHandler.open(todoEl);
    const cardFormSubmitBtn = document.querySelector('#card-form-submit');
    cardFormSubmitBtn.addEventListener('click', () => {
        const cardFormDesriptionInput = document.querySelector('#card-form-description');
        todoList.add(cardFormDesriptionInput.value, 'to do');
    });
});

inProgressAddBtnEl.addEventListener('click', () => {
    cardFormHandler.open(inProgressEl);
    const cardFormSubmitBtn = document.querySelector('#card-form-submit');
    cardFormSubmitBtn.addEventListener('click', () => {
        const cardFormDesriptionInput = document.querySelector('#card-form-description');
        todoList.add(cardFormDesriptionInput.value, 'in progress');
    });
});

completeAddBtnEl.addEventListener('click', () => {
    cardFormHandler.open(completeEl);
    const cardFormSubmitBtn = document.querySelector('#card-form-submit');
    cardFormSubmitBtn.addEventListener('click', () => {
        const cardFormDesriptionInput = document.querySelector('#card-form-description');
        todoList.add(cardFormDesriptionInput.value, 'complete');
    });
});

clearAllBtn.addEventListener('click', () => {
    todoList.clear();
});
