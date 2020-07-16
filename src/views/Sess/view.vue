<template lang="pug">
	div.game
		Game(v-if="sess.in_progress")
		Lobby(v-else)
		Dasboard
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

import Game from './Game'
import Lobby from './Lobby'

import Dasboard from '@/comp/Dasboard'

export default Vue.extend({
	name: 'Sess',
	
	components: {
		Game,
		Lobby,
		Dasboard,
	},

	props: {
		id: {
			type: String,
			required: true,
			default: '',
		}
	},

	computed: {
		...mapState(['sess'])
	}
})
</script>
