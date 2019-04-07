import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import ui from './store/ui'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [],
    utils: {
      isLoading: false
    }
  },
  getters: {
    events: state => state.events,
    GetLoadingStatus: state => state.utils.isLoading
  },
  mutations: {
    setEvents (state, events) {
      state.events = events
    },
    startLoading (state) {
      state.utils.isLoading = true
    },
    stopLoading (state) {
      state.utils.isLoading = false
    }
  },
  actions: {
    loadEvents ({ commit }) {
      commit('startLoading')
      axios.get('/events.json').then(({ data }) => {
        commit('setEvents', data)
      }).catch((error) => {
        window.console.error(error)
        // TODO: notification?
      }).finally(() => commit('stopLoading'))
    }
  },

  modules: {
    ui
  }
})
