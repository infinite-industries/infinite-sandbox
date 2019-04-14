
const state = function () {
  return {
    sidebarOpen: false
  }
}

const getters = {
  sidebarOpen: (state) => {
    return state.sidebarOpen
  }
}

const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.sidebarOpen = !state.sidebarOpen
  }
}

const actions = {
  toggleSidebar: (context) => {
    context.commit('TOGGLE_SIDEBAR')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
