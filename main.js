import TodoList from "./todo.js";
import { saveToLocalStorage, loadFromLocalStorage } from "./localStorageHelpers.js";
import { renderTodos } from "./domManipulation.js";

const todoEl = document.querySelector('#state-to-do');
const inProgressEl = document.querySelector('#state-in-progress');
const completeEl = document.querySelector('#state-complete');
const todoAddBtnEl = document.querySelector('#add-to-do');
const inProgressAddBtnEl = document.querySelector('#add-in-progress');
const completeAddBtnEl = document.querySelector('#add-complete');
const clearAllBtn = document.querySelector('#clear-all');

// Check if todos exist in the localStorage and populate the new instance of TodoList with them.
// If not, create a new instance of TodoList with empty items
const todoList = loadFromLocalStorage('todos') ? new TodoList(loadFromLocalStorage('todos')) : new TodoList();

// Render todos based on their status
renderTodos(todoEl, todoList.items.filter((items) => items.status === 'to do'));
renderTodos(inProgressEl, todoList.items.filter((items) => items.status === 'in progress'));
renderTodos(completeEl, todoList.items.filter((items) => items.status === 'complete'));

todoAddBtnEl.addEventListener('click', () => {
    todoList.add("test", 'to do');
    saveToLocalStorage('todos', todoList.items);
    location.reload();
});

inProgressAddBtnEl.addEventListener('click', () => {
    todoList.add("test", 'in progress');
    saveToLocalStorage('todos', todoList.items);
    location.reload();
});

completeAddBtnEl.addEventListener('click', () => {
    todoList.add("test", 'complete');
    saveToLocalStorage('todos', todoList.items);
    location.reload();
});

clearAllBtn.addEventListener('click', () => {
    todoList.clear();
    saveToLocalStorage('todos', todoList.items);
    location.reload();
});
