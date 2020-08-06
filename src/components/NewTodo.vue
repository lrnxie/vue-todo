<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="title" />
    <button type="submit">Add Todo</button>
  </form>
</template>

<script>
export default {
  name: "NewTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTodo() {
      const newTodo = {
        id: Date.now(),
        title: this.title,
        completed: false,
      };

      this.$emit("add-todo", newTodo);

      this.title = "";
    },
  },
};
</script>

<style></style>
