import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );

    commit("setTodos", response.data);
  },

  addTodo({ commit }, title) {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    commit("addTodo", newTodo);
  },

  delTodo({ commit }, id) {
    commit("delTodo", id);
  },

  editTodo({ commit }, editedTodo) {
    commit("editTodo", editedTodo);
  },
};

const mutations = {
  setTodos(state, todos) {
    state.todos = todos;
  },

  addTodo(state, newTodo) {
    state.todos = [newTodo, ...state.todos];
  },

  delTodo(state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },

  editTodo(state, editedTodo) {
    state.todos = state.todos.map((todo) =>
      todo.id === editedTodo.id ? editedTodo : todo
    );
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
