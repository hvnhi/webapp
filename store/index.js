const types = {
  UPDATE_LOGGEDIN: 'UPDATE_LOGGEDIN',
}

export const state = () => ({
})

export const mutations = {
  [types.UPDATE_LOGGEDIN](state, loggedIn) {
    state.auth.loggedIn = loggedIn
  }
}

export const actions = {
  updateLoggedIn({ commit }, loggedIn = false) {
    commit(types.UPDATE_LOGGEDIN, loggedIn)
  },
}

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  }
}
