<template lang="pug">
	div.deck
		slot
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'Deck',

	components: {
	},
})
</script>

<style lang="scss" scoped>
	.deck {
		/* flex-grow: 1;
		position: relative;
		margin: 2vmin 0; */
		position: absolute;
		left: 0;
		right: 0;
		top: 18vmin;
		bottom: 0;
	}
</style>


