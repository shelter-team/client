import Vue from 'vue'
import Vuex, { ActionTree, ModuleTree } from 'vuex'

import app from './app'
import sess from './sess'

Vue.use(Vuex)

const defaultState = () => ({})

// FIXME: Я ебал
// eslint-disable-next-line
const modules: ModuleTree<any> = {
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