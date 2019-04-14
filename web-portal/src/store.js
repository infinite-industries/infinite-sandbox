import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import ui from './store/ui'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state () {
      return {
        events: [],
        event: {},
        utils: {
          isLoading: false
        }
      }
    },
    getters: {
      events: state => state.events,
      event: state => state.event,
      GetLoadingStatus: state => state.utils.isLoading
    },
    mutations: {
      setEvents (state, events) {
        state.events = events
      },
      setEvent (state, event) {
        state.event = event
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
        return axios.get('http://localhost:3000/events.json').then(({ data }) => {
          commit('setEvents', data)
        }).catch((error) => {
          if (typeof window !== 'undefined') window.console.error(error)
        // TODO: notification?
        }).finally(() => commit('stopLoading'))
      },
      clearEvents ({ commit }) {
        commit('setEvents', [])
      },
      loadEvent ({ commit }, eventId) {
        commit('startLoading')
        return axios.get('http://localhost:3000/events.json').then(({ data }) => {
          const event = data.find((e) => e.id === eventId)
          if (event) commit('setEvent', event)
          else throw new Error('Event not found')
        }).catch((error) => {
          if (typeof window !== 'undefined') window.console.error(error)
        // TODO: notification?
        }).finally(() => commit('stopLoading'))
      },
      clearEvent ({ commit }) {
        commit('setEvent', {})
      }
    },

    modules: {
      ui
    }
  })
}
