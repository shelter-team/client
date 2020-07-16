<template lang="pug">
	div.card(
		:style="cardN"
	)
		div.container
			div.title(
				@click="toggleActive"
			)
				slot(name="title")
					span(
						v-if="!!title"
						:class="[alert && !isActive && 'witness-me']"
					) {{ title }}
			div(:class="['content', activeClass]")
				slot(name="content")
			button.button(@click="toggleActive") Свернуть
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'Card',

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
		},

		current: {
			type: Number,
			default: -1,
			required: true,
		},

		cover: {
			type: String,
			default: '',
			required: false,
		},

		alert: {
			type: Boolean,
			default: false,
			required: false,
		},
	},

	data: () => ({
		active: false,
	}),

	computed: {
		isActive() { return this.current === this.order },

		activeClass() {
			return this.isActive
				? 'active'
				: 'stacked'
		},

		cardN() {
			const isActive = this.order === this.current //(this.active as boolean)
			const offset: number = isActive ? 0 : 18

			switch (true) {
				case this.current < 0: {
					return {
						top: `${(this.order as number) * offset}vmin`,
						marginTop: 0,
					}
				}
				case this.order > this.current: {
					return {
						top: `100%`,
						marginTop: `4vmin`,
					}
				}
				case this.order == this.current: {
					return {
						top: `0`,
						marginTop: 0,
					}
				}
			}
		}
	},

	methods: {
		toggleActive() {
			this.active = !this.active
			this.$emit('update', this.order)
		}
	}
})
</script>

<style lang="scss" scoped>
	.card {
		height: 100%;
		background-color: #eee;
		position: absolute;
		border-radius: 3vmin;
		box-shadow: 0 0 3vmin #000;
		margin: 0 2vmin;
		left: 0;
		right: 0;
		transition: all 0.15s;

		.title {
			padding: 6vmin;
		}

		.content {
			overflow: auto;
			margin: 0 6vmin;
			flex-grow: 1;

			&.active {
				overflow: auto;
				opacity: 1;
			}
			&.stacked {
				overflow: hidden;
				opacity: 0.33;
			}
		}

		.button {
			padding: 2vmin;
			margin: 6vmin;
		}
	}
</style>
