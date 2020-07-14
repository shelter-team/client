// import Vue from 'vue'

import { ActionTree } from 'vuex'

const defaultState = () => ({
	scenario: 'Чума',
	bunker: {
		capacity: 6,
	},
	profile: {},
	people: []
})

const state = defaultState()

type TState = typeof state

const actions: ActionTree<TState, TState> = {
	async init() {
		//
	}
}

const mutations = {}

export default {
	namespaced: true,
  state,
  mutations,
  actions,
}