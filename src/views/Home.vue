<template>
  <div>
    <NewTodo />
    <TodoList />
  </div>
</template>

<script>
import TodoList from "../components/TodoList";
import NewTodo from "../components/NewTodo";

export default {
  name: "Home",
  components: {
    TodoList,
    NewTodo,
  },
};
</script>
