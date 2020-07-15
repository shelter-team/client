<template lang="pug">
	div(:class="[active && 'active']").row
		div.icon {{ icon }}
		div.val
			div.title {{ title }}
			div.text {{ value }}
		div.icon
			snap(v-if="active") ☑️
			span(v-else) -
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'Trait',

	props: {
		title: {
			type: String,
			default: '',
			required: false,
		},

		value: {
			type: String,
			default: '',
			required: false,
		},

		icon: {
			type: String,
			default: '',
			required: false,
		},

		active: {
			type: String,
			default: '',
			required: false,
		},
	},
})
</script>

<style lang="scss" scoped>
	.row {
		display: flex;
		flex-flow: row nowrap;
		margin-bottom: 2vmin;
		align-items: center;
		border-top: 1px dotted;
		padding: 2vmin 0;
		opacity: 0.6;

		&:last-of-type {
			border-bottom: 1px dotted;
		}

		.icon {
			flex-basis: 12vmin;
			height: 12vmin;
			flex-grow: 0;
			flex-shrink: 0;
			display: grid;
			place-items: center;
			font-size: 150%;
		}

		.val {
			margin: 0 2vmin;
			flex-grow: 1;
			flex-shrink: 1;
			display: flex;
			flex-flow: column nowrap;

			.title {
				font-size: 40%;
			}
			.text {
				/* font-weight: bold; */
			}
		}

		&.active {
			opacity: 1;
		}
	}
</style>
