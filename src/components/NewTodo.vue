<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="title" />
    <button type="submit">Add Todo</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NewTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    handleSubmit() {
      if (this.title.trim() !== "") {
        this.addTodo(this.title);
        this.title = "";
      }
    },
  },
};
</script>

<style></style>
