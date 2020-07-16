import Vue from 'vue'
import { ActionTree } from 'vuex'

import { defaultPerson, TPerson, scramble } from './types'
import { rand } from '@/utils/Rand'

const defaultState = () => ({
	in_progress: true,
	is_voting: false,
	is_discover: false,
	scenario: 'Пандемия',
	bunker: {
		capacity: rand(5, 8),
		area: rand(5, 10) * 10,
		time: rand(2, 8) * 15,
	},
	people: [...(new Array(10))].map((e, i) => defaultPerson(i.toString())),
	id: rand(0, 9).toString(),
	score: {},
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
	},

	// Меняем нашу оценку игрока
	incScore({ state: TState, commit }, player_id: string) {
		commit('SET_SCORE', {
			id: player_id,
			score: +(state.score[player_id] || 0) + 1
		})
	},

	decScore({ state: TState, commit }, player_id: string) {
		commit('SET_SCORE', {
			id: player_id,
			score: +(state.score[player_id] || 0) - 1
		})
	},

	setVoting({ commit }, value: boolean) {
		commit('SET_VOTING', value)
	},

	setDiscover({ commit }, value: boolean) {
		commit('SET_DISCOVER', value)
	},
}

const mutations = {
	SET_PEOPLE(state: TState, people: TPerson[]) {
		Vue.set(state, 'people', [...people])
	},

	SET_SCORE(state: TState, payload: { id: string, score: number }) {
		Vue.set(state.score, payload.id, payload.score)
	},

	SET_VOTING(state: TState, value: boolean) {
		Vue.set(state, 'is_voting', value)
	},

	SET_DISCOVER(state: TState, value: boolean) {
		Vue.set(state, 'is_discover', value)
	},
}

export default {
	namespaced: true,
  state,
  mutations,
	actions,
	getters,
}