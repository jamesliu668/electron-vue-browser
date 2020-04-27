export default {
  namespaced: true,
  state: {
    userName: "James",
    ip: "127.0.0.1"
  },

  mutations: {
    setUserName(state, userName) {
        state.userName = userName
    }
  },

  actions: {
    init(context) {
      console.log('page init')
      context.commit("setUserName", "Henry")
    }
  }
}
