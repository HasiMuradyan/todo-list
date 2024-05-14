import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      isLoading: false
    }
  },
  mutations: {
    toggleLoading(state) {
      state.isLoading = !state.isLoading
    }
  },
  getters: {
    isLoading: (state) => state.isLoading
  }
})

export { store }
