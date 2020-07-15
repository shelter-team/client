<template lang="pug">
	div.splash.container
		router-link.block(
			to="/sess/1492"
		) Демо: Катка
		
		router-link.block(
			to="/endgame"
		) Демо: Итог
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'Splash',
	components: {
	}
})
</script>
