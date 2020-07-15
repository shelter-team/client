<template lang="pug">
	div.container
		Brief(
			v-for="id of vIndex"
			:key="id"
			:id="id"
		)
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

import Brief from '@/comp/Brief'

export default Vue.extend({
	name: 'PlayersCard',
	
	components: {
		Brief,
	},

	computed: {
		...mapState('sess', ['people']),

		vIndex() {
			return this
				.people
				.map(p => p.id)
		},
	}
})
</script>

<style lang="scss" scoped>
	.list {
		display: grid;
		grid-template-columns: auto auto;
		gap: 0 2vmin;

		& * {
			font-size: 75%;
		}

		.row {
			grid-column: 1 / 3;
			/* font-size: 80%; */
		}
		.sep {
			grid-column: 1 / 3;
			margin: 2vmin 0;
			border-top: 1px dotted;
		}
		.key {
			/* font-size: 80%; */
			font-weight: bold;
		}
		.val {
			/* font-size: 80%; */
			text-align: right
		}
	}
</style>
