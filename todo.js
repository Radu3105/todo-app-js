let currentId = 0;

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
    }

    clear() {
        this.items = [];
    }
}

export default TodoList;