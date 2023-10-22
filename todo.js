import { loadFromLocalStorage, saveToLocalStorage } from "./localStorageHelpers.js";

let currentId = loadFromLocalStorage('currentId') ? loadFromLocalStorage('currentId') : 0;

class Todo {
    constructor(description, status) {
        this.id = currentId++;
        this.description = description;
        this.status = status;
    }
}

class TodoList {
    constructor(items = []) {
        this.items = items;
    }

    add(description, status) {
        this.items.push(new Todo(description, status));

        //TODO Save items to localStorage
        saveToLocalStorage('todos', this.items);

        //TODO Save currentId to localStorage
        saveToLocalStorage('currentId', currentId); 
    }

    clear() {
        this.items = [];
        currentId = 0;
        saveToLocalStorage('todos', []);
        saveToLocalStorage('currentId', currentId);
    }
}

export default TodoList;