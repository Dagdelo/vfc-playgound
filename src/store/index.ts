import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex';
import users from './users';
import posts from './posts';
import { StoreState } from './types';

// define injection key
export const key: InjectionKey<Store<StoreState>> = Symbol()

export const store = createStore({
  modules: {
    users,
    posts,
  },
});
