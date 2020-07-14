<template lang="pug">
	div.game.container
		|LOBBY
</template>

<script>
import Vue from 'vue'

import Block from '@/comp/Block.vue'
import { mapState } from 'vuex'

export default Vue.extend({
	name: 'Lobby',
	
	components: {
		Block
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
