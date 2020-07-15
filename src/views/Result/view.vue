<template lang="pug">
	div.container
		div.block {{ title }}
		div.content
			div.block {{ entry }}
			div.block {{ setup }}
			div.block(v-for="event, idx in bunker" :key="idx") {{ event }}
		button.block(@click="onRestart") {{ restart }}
</template>

<script>
import Vue from 'vue'

import {
	pick
} from '@/utils/Rand'

import {
	make_story
} from './story'

export default Vue.extend({
	name: 'Result',
	
	data: () => make_story(),

	methods: {

		onRestart() {
			const new_story = make_story()
			Object
				.keys(new_story)
				.forEach(key => Vue.set(this.$data, key, new_story[key]))
		},
	}
})
</script>

<style lang="scss" scoped>
.content {
	flex-grow: 1;
	overflow: auto;
	margin: 6vmin 0;
}
</style>