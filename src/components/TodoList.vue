<template>
  <ul>
    <li v-for="todo in todos" v-bind:key="todo.id">
      <TodoItem
        v-bind:todo="todo"
        v-on:del-todo="$emit('del-todo', todo.id)"
        v-on:edit-todo="editTodo"
      />
    </li>
  </ul>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  props: ["todos"],
  methods: {
    editTodo(editedTodo) {
      this.$emit("edit-todo", editedTodo);
    },
  },
};
</script>

<style></style>
