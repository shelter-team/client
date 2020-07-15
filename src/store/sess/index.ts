import Vue from 'vue'
import { ActionTree } from 'vuex'

import { defaultPerson, TPerson, scramble } from './types'
import { rand } from '@/utils/Rand'

const defaultState = () => ({
	in_progress: true,
	scenario: 'Пандемия',
	bunker: {
		capacity: rand(5, 8),
		area: rand(5, 10) * 10,
		time: rand(2, 8) * 15,
	},
	people: [...(new Array(10))].map((e, i) => defaultPerson(i.toString())),
	id: rand(0, 9).toString()
})

const state = defaultState()

type TState = typeof state

const getters = {
	getProfile(state: TState) {
		return state.people.find(p => p.id === state.id)
	}
}

const actions: ActionTree<TState, TState> = {
	async init({ commit, state }) {
		const player = state.id
		commit('SET_PEOPLE', state.people.map(p => p.id === player ? p : scramble(p)))
	}
}

const mutations = {
	SET_PEOPLE(state: TState, people: TPerson[]) {
		Vue.set(state, 'people', [...people])
	}
}

export default {
	namespaced: true,
  state,
  mutations,
	actions,
	getters,
}