import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define your typings for the store state
interface CounterState {
    count: number
}

// define injection key
export const key: InjectionKey<Store<CounterState>> = Symbol()

export const store = createStore<CounterState>({
  state: {
    count: 0
  },
  mutations: {
    increment (state: CounterState, amount: number) {
      state.count += amount;
    }
  }
})