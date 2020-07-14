import Vue from 'vue'
import Vuex, { ActionTree } from 'vuex'

import app from './app'
import sess from './sess'

Vue.use(Vuex)

const defaultState = () => ({})

const modules = {
	app,
	sess
}

const state = defaultState()

type TState = typeof state

const actions: ActionTree<TState, TState> = {
	async init({ dispatch }) {
		// module init
		for (const key in modules) {
			await dispatch(`${key}/init`)
		}
	}
}

const mutations = {}

export default new Vuex.Store({
	// state,
	mutations,
	actions,
	modules,
})