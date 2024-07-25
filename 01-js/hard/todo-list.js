/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = []
  }

  add(todo) {
    this.todos = [...this.todos, todo];
  }

  remove(indexOfTodo) {
    const updatedTodos = this.todos.filter((_, i) => i !== indexOfTodo);
    this.todos = updatedTodos;
  }

  update(index, updatedTodo) {
    const updatedTodosData = this.todos.map((item, i) =>
      i === index ? updatedTodo : item
    );
    this.todos = updatedTodosData;
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    return this.todos[indexOfTodo] ?? null
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
