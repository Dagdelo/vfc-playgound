// posts.ts
import { PostsState, Post } from "./types";

const state = (): PostsState => ({
  posts: [],
});

const mutations = {
  addPost(state: PostsState, post: Post) {
    state.posts.push(post);
  },
};

const actions = {
  async fetchPosts({ commit }) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await response.json();
    posts.forEach((post) => commit("addPost", post));
  },
};

const getters = {
  getPosts(state: PostsState): Post[] {
    return state.posts;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
