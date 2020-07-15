<template lang="pug">
	div.row
		div.icon {{ vId }}
		div.val
			div.title
				div.tag(v-if="isPlayer") Это вы
				div.tag(v-if="isLeft") Слева
				div.tag(v-if="isRight") Справа
			div.text {{ vInfo }}
		div.dial
			button.ctrl +
			div.score 0
			button.ctrl –
		
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { shit } from '@/utils/Rand'
import { biology } from '@/utils/Player'

export default Vue.extend({
	name: 'Brief',

	components: {
	},

	props: {
		id: {
			type: String,
			default: '',
			required: false,
		}
	},

	computed: {
		...mapState('sess', {
			'people': 'people',
			'player': 'id'
		}),

		vId() { return +this.id + 1 },

		isPlayer() { return this.id === this.player },
		isRight() {
			const next = (+this.player - 1) % this.people.length
			return next.toString() === this.id
		},
		isLeft() {
			const next = (+this.player + 1) % this.people.length
			return next.toString() === this.id
		},

		vInfo() {
			const current = this.people[this.id]
			return [
				biology(current),
				current.proffession,
				current.health,
				current.hobby,
				current.trait,
				current.phobia,
				current.perk,
				current.baggage,
			].filter(shit).join('; ')
		}
	},
})
</script>

<style lang="scss" scoped>
	.row {
		display: flex;
		flex-flow: row nowrap;
		margin-bottom: 2vmin;
		align-items: top;
		border-top: 1px dotted;
		padding: 2vmin 0;
		opacity: 1;

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

		.dial {
			display: grid;
			flex-basis: 8vmin;
			grid-template-rows: 8vmin 1fr 8vmin;

			.score {
				background-color: #0001;
				display: grid;
				place-content: center;
				padding: 3vmin 0;
			}

			.ctrl {
				width: 8vmin;
				height: 8vmin;
				padding: 0;
				margin: 0;
			}
		}

		.val {
			margin: 0 2vmin;
			flex-grow: 1;
			flex-shrink: 1;
			display: flex;
			flex-flow: column nowrap;

			.title {
				font-size: 50%;
				font-weight: bold;

				.tag {
					font-size: 3vmin;
					line-height: 3vmin;
					padding: .5vmin;
					background: #333;
					color: #fff;
					display: inline-block;
					margin-right: 1vmin
				}
			}
			.text {
				/* font-weight: bold; */
			}
		}

		&.excluded {
			opacity: 0.5;
		}
	}
</style>
