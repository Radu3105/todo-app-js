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
    constructor(items = []) { // Default value: []
        this.items = items;
    }

    add(description, status) {        
        this.items.push(new Todo(description, status));

        // Save the todos and the current id to localStorage
        saveToLocalStorage('todos', this.items);
        saveToLocalStorage('currentId', currentId); 

        // Refresh the page
        location.reload();
    }

    update(id, description, status) {
        let todo = this.getById(id);
        todo.description = description;
        todo.status = status;
        saveToLocalStorage('todos', this.items);
        location.reload();
    }

    remove(id) {
        let itemIndex = this.items.findIndex((el) => el.id === id);
        if (itemIndex !== -1) {
            this.items.splice(itemIndex, 1);
            saveToLocalStorage('todos', this.items);
            location.reload();
        }
    }

    getById(id) {
        return this.items.find((el) => el.id === id);
    }

    clear() {
        // Reset fields
        this.items = [];
        currentId = 0;

        // Save the todos and the current id to localStorage
        saveToLocalStorage('todos', []);
        saveToLocalStorage('currentId', currentId);

        // Refresh the page
        location.reload();
    }
}

export default TodoList;