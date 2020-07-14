// import Vue from 'vue'
import { ActionTree } from 'vuex'

import { defaultPerson, TPerson } from './types'

const defaultState = () => ({
	in_progress: true,
	scenario: 'Чума',
	bunker: {
		capacity: 6,
	},
	profile: defaultPerson(),
	people: [] as TPerson[],
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