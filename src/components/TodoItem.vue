<template>
  <div>
    <div v-if="!editStatus" v-bind:class="{ completed: todo.completed }">
      <input
        type="checkbox"
        v-on:change="markComplete"
        :checked="todo.completed"
      />
      <span>{{ todo.title }}</span>
      <button @click="changeEditStatus(true)">Edit</button>
      <button @click="$emit('del-todo', todo.id)">Delete</button>
    </div>

    <form v-else @submit.prevent="editTodo">
      <input type="text" v-model="newTitle" />
      <button type="submit">Save</button>
      <button @click="changeEditStatus(false)">Cancel</button>
    </form>
  </div>
</template>

<script>
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
    markComplete() {
      this.todo.completed = !this.todo.completed;
    },
    changeEditStatus(bool) {
      this.editStatus = bool;
    },
    editTodo() {
      const editedTodo = { ...this.todo, title: this.newTitle };

      this.$emit("edit-todo", editedTodo);
      this.editStatus = false;
    },
  },
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
