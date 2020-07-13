import Vue from 'vue'
import Vuex from 'vuex'

import client from '@/mods/Session/store'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const defaultState = () => ({
})

const state = defaultState()

const actions = {
	init({ dispatch }) {
	}
}

const mutations = {
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	modules: {
		client
	},
	strict: debug,
	plugins: debug ? [] : []
})