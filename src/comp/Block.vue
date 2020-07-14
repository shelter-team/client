<template lang="pug">
	div.block
		slot(name="content")
			span(
				v-if="!!title"
			) Title
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'Home',

	components: {
	},

	props: {
		title: {
			type: String,
			default: '',
			required: false,
		}
	},
})
</script>
