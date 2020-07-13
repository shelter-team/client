<template lang="pug">
	div
		span Zalupa
		router-view(class="content")
</template>

<script lang="ts">
import Vue from 'vue'
// import { mapActions } from 'vuex'

export default Vue.extend({
	name: 'app',

	components: {
	},
	
	mounted() {
	},

	methods: {
		// ...mapActions(['init'])
	}

})
</script>