// users.ts
import { UsersState, User } from "./types";

const state = (): UsersState => ({
  users: [],
});

const mutations = {
  addUser(state: UsersState, user: User) {
    state.users.push(user);
  },
};

const actions = {
  async fetchUsers({ commit }) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await response.json();
    users.forEach((user) => commit("addUser", user));
  },
};

const getters = {
  getUsers(state: UsersState): User[] {
    return state.users;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
