<template lang="pug">
	div#app
		router-view
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
	name: 'App',

	mounted() {
		this.init()
	},

	methods: {
		...mapActions(['init'])
	}
})
</script>