<template>
  <div>
    <div v-if="!editStatus" :class="{ completed: todo.completed }">
      <input type="checkbox" @change="markComplete" :checked="todo.completed" />
      <span>{{ todo.title }}</span>
      <button @click="changeEditStatus(true)">Edit</button>
      <button @click="delTodo(todo.id)">Delete</button>
    </div>

    <form v-else @submit.prevent="handleSubmit">
      <input type="text" v-model="newTitle" />
      <button type="submit">Save</button>
      <button @click="changeEditStatus(false)">Cancel</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TodoItem",
  props: ["todo"],
  data() {
    return {
      editStatus: false,
      newTitle: this.todo.title,
    };
  },
  methods: {
    ...mapActions(["delTodo", "editTodo"]),

    markComplete() {
      const editedTodo = {
        ...this.todo,
        completed: !this.todo.completed,
      };

      this.editTodo(editedTodo);
    },

    changeEditStatus(bool) {
      this.editStatus = bool;
    },

    handleSubmit() {
      if (this.newTitle.trim() !== "") {
        const editedTodo = {
          ...this.todo,
          title: this.newTitle,
        };

        this.editTodo(editedTodo);
        this.editStatus = false;
      } else {
        alert("Title cannot be empty");
      }
    },
  },
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
