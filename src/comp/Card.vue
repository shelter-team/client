<template lang="pug">
	div.card(
		:style="cardN"
	)
		div.container
			div.title(
				@click="toggleActive"
			)
				slot(name="title")
					span(v-if="!!title") {{ title }}
			div.content
				slot(name="content")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'Block',

	components: {
	},

	props: {
		title: {
			type: String,
			default: '',
			required: false,
		},

		order: {
			type: Number,
			default: 0,
			required: true,
		}
	},

	data: () => ({
		active: false,
	}),

	computed: {
		cardN() {
			const isActive = (this.active as boolean)
			const offset: number = isActive ? 0 : 18
			return {
				top: `${(this.order as number) * offset}vmin`,
				zIndex: isActive ? 1000 : (this.order as number)
			}
		}
	},

	methods: {
		toggleActive() {
			this.active = !this.active
		}
	}
})
</script>

<style lang="scss" scoped>
	.card {
		height: 100%;
		background: #eee;
		position: absolute;
		padding: 6vmin;
		border-radius: 3vmin;
		box-shadow: 0 0 3vmin #000;
		margin: 0 2vmin;
		left: 0;
		right: 0;
		transition: all 0.15s;

		.title {
			margin-bottom: 6vmin;
		}
		
		.content {
			overflow: auto;
		}
	}
</style>
