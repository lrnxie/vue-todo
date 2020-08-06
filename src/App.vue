<template>
  <div id="app">
    <h1>Vue Todos</h1>
    <NewTodo @add-todo="addTodo" />
    <TodoList v-bind:todos="todos" @del-todo="delTodo" @edit-todo="editTodo" />
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

export default {
  name: "App",
  components: {
    TodoList,
    NewTodo,
  },
  data: () => {
    return {
      todos: [],
    };
  },
  methods: {
    delTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },

    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    },

    editTodo(editedTodo) {
      this.todos = this.todos.map((todo) =>
        todo.id === editedTodo.id ? editedTodo : todo
      );
    },
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((json) => (this.todos = json));
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
