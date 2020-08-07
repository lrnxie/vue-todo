<template>
  <ul>
    <li v-for="todo in allTodos" :key="todo.id">
      <TodoItem :todo="todo" />
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  methods: {
    ...mapActions(["fetchTodos"]),
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>

<style></style>
