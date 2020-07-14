<template lang="pug">
	div#app
		router-view
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'

import { sse } from '@/api/sse'

export default Vue.extend({
	name: 'App',

	mounted() {
		this.init()
	},

	computed: {
		...mapState('app', ['appID'])
	},

	watch: {
		appID(value: string) {
			sse.token = value
		}
	},

	methods: {
		...mapActions(['init'])
	}
})
</script>