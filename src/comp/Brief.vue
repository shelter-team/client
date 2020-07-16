<template lang="pug">
	div.row
		div.main
			div.before
				div.icon {{ vId }}
				div.tag(v-if="isPlayer") Это вы
				div.tag(v-if="isLeft") Слева
				div.tag(v-if="isRight") Справа
			div.val
				div.title {{ vName }}
				div.text {{ vInfo }}
		div.vote
				div.span.small.center ваша оценка:
				
				template
					div(v-if="vVoting")
					button.ctrl(
						v-else
						@click="onDec"
					) &minus;
				div.score {{ vScore }}
				template
					div(v-if="vVoting")
					button.ctrl(
						v-else
						@click="onInc"
					) &plus;

				div.span(v-if="vVoting")
					button.button ВЫГНАТЬ
		
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
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
			'player': 'id',
			'score': 'score',
			'vVoting': 'is_voting'
		}),

		vId() { return +this.id + 1 },

		isPlayer() { return this.id === this.player },
		isRight() {
			const next = (+this.player - 1 + this.people.length) % this.people.length
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
			].filter(shit).join(' ‎• ')
		},

		vName() { return this.people[this.id].name },

		vScore() {
			return this.score[this.id] || 0
		},
	},

	methods: {
		...mapActions('sess', [
			'incScore',
			'decScore',
		]),

		onInc() {
			this.incScore(this.id)
		},

		onDec() {
			this.decScore(this.id)
		},
	},
})
</script>

<style lang="scss" scoped>
	.row {
		display: flex;
		flex-flow: column nowrap;
		margin-bottom: 2vmin;
		align-items: top;
		border-top: 1px dotted;
		padding: 2vmin 0;
		opacity: 1;

		&:last-of-type {
			border-bottom: 1px dotted;
		}

		.main {
			display: flex;
			flex-flow: row nowrap;
		}

		.before {
			flex-basis: 12vmin;
			flex-shrink: 0;
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

		.tag {
			font-size: 3vmin;
			line-height: 3vmin;
			padding: .5vmin;
			background: #333;
			color: #fff;
			display: inline-block;
			margin-top: 1vmin
		}

		.vote {
			/* height: 8vmin; */
			display: grid;
			grid-template-columns: 8vmin 1fr 8vmin;
			grid-auto-flow: row;
			grid-auto-rows: auto;
			margin-top: 2vmin;
			gap: 2vmin;

			.button {
				width: 100%;
				padding: 3vmin;
				background-color: red;
				color: white;
				font-weight: bold;
				border: 1px solid #800;
				border-radius: 3vmin;

				&:active {
					margin: 1vmin 0 -1vmin;
				}
			}

			.span {
				grid-column: 1 / 4;
			}

			.center {
				justify-self: center;
				align-self: center;
			}

			.small {
				font-size: 3vmin;
				font-weight: bold;
			}

			.score {
				background-color: #0001;
				display: grid;
				place-content: center;
				padding: 1vmin 3vmin;
			}

			.ctrl {
				width: 8vmin;
				height: 8vmin;
				border: 1px solid;
				padding: 0;
				border-radius: 2vmin;;
			}
		}

		.val {
			margin-left: 2vmin;
			flex-grow: 1;
			flex-shrink: 1;
			display: flex;
			flex-flow: column nowrap;

			.title {
				font-size: 50%;
				font-weight: bold;
			}
			.text {
				/* font-weight: bold; */
				font-size: 80%;
			}
		}

		&.excluded {
			opacity: 0.5;
		}
	}
</style>
