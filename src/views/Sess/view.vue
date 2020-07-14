<template lang="pug">
		Game(v-if="sess.in_progress")
		Lobby(v-else)
</template>

<script>
import Vue from 'vue'

import Game from './Game'
import Lobby from './Lobby'

import { mapState } from 'vuex'

export default Vue.extend({
	name: 'Sess',
	
	components: {
		Game,
		Lobby
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
