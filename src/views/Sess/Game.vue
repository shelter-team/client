<template lang="pug">
	div.game.container
		Block
			template(#content) Сценарий: {{ sess.scenario }}
		Block
			template(#content) - Бункер -
		Block
			template(#content) - Профиль -
		Block
			template(#content) - Особ. условия -
		Block
			template(#content) - Кандидаты -
</template>

<script>
import Vue from 'vue'

import Block from '@/comp/Block.vue'
import { mapState } from 'vuex'

export default Vue.extend({
	name: 'Game',
	
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
