<template lang="pug">
	div.tray(:class="[isActive && 'active']")
		div.list
			div.master
				button(@click="onVoting") Голосование: {{ is_voting }}
				button(@click="onDiscover") Раскрытие: {{ is_discover }}
			div.dash(
				v-for="evt, idx in vList"
				:key="idx"
			)
				div.message
					div.header {{ evt.title }}
					div.text {{ evt.text }}
				div.action(@click="onAction(evt.tag)") {{ evt.icon }}
			//-div.dash
				button(@click="onBuzz") Buzzzz
		div.title(@click="onToggle") 
			div.text
				template(v-if="isActive") Свернуть
				template(v-else) {{ vHeadline }}
			div.button(v-if="!isActive")
</template>

<script lang="ts">
import Vue from 'vue'
import { 
	TAG,
	SIG,
  TAB
} from '@/config'
import { bus } from '@/plugins/eventBus'
import { mapState, mapActions } from 'vuex'

const event = (title: string, text: string, icon?: string, tag?: string) => ({ title, text, icon, tag })

export default Vue.extend({
	name: 'Dashboard',

	components: {
	},

	props: {
	},

	data: () => ({
		isActive: false,
		events: [
			event('Раунд 1: Вскрываемся', 'В свою очередь раскройте одну из своих характеристик остальным игрокам.', '✔️', TAG.SHOW),
			event('Раунд 1: Голосование', 'В свою очередь выберите игрока, который по вашему мнению не должен попасть в бункер.', '✔️'),
			event('Раунд 2: Вскрываемся', 'В свою очередь раскройте одну из своих характеристик остальным игрокам.', '✔️', TAG.SHOW),
			event('Событие: смена профессий', 'Игрок 3 активирует особое условие. Все игроки получают новые профессии.', '✔️'),
			event('Раунд 2: Голосование', 'В свою очередь выберите игрока, который по вашему мнению не должен попасть в бункер.', '➡️', TAG.VOTE),
		]
	}),

	computed: {
		...mapState('sess', ['is_voting', 'is_discover']),
		vList() {
			return [...this.events].reverse()
		},

		vHeadline() { return this.vList[0]['title'] || 'Dashboard' },
	},

	methods: {
		...mapActions('sess', [
			'setVoting',
			'setDiscover',
		]),

		onToggle() {
			this.isActive = !this.isActive
		},

		onBuzz() {
			this.events.push(event(
				'Buzz',
				window.navigator.vibrate([200, 50, 100]).toString(),
			)) 
		},

		onAction(tag) {
			switch (tag) {
				case TAG.VOTE: {
					this.isActive = false
					bus.$emit(SIG.OPEN_TAB, TAB.ROSTER)
					break
				}
				case TAG.SHOW: {
					this.isActive = false
					bus.$emit(SIG.OPEN_TAB, TAB.PROFILE)
					break
				}
			}
		},

		onVoting() { this.setVoting(!this.is_voting) },
		onDiscover() { this.setDiscover(!this.is_discover) },
	}
})
</script>

<style lang="scss" scoped>
	.tray {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		margin: 0;
		height: 18vmin;
		background-color: #666;
		box-shadow: 0 0 3vmin #000;
		transition: 0.15s all;
		display: flex;
		flex-flow: column;

		&.active {
			height: 100%;
			background-color: #eee;

			.list {
				flex-grow: 1;
				opacity: 1;
				height: auto;
				overflow: auto;
			}
		}

		.list {
			overflow: hidden;
			height: 0;
			opacity: 0;

			.dash {
				border-bottom: 2px ridge;
				padding: 3vmin;
				display: flex;
				flex-flow: row nowrap;
				align-items: center;

				.message {
					display: flex;
					flex-flow: column nowrap;

					.header {
						font-size: 3vmin;
						font-weight: bold;
					}
					.text {
						font-size: 4vmin;
					}
				}

				.action:not(:empty) {
					margin-left: 3vmin;
					padding: 3vmin;
					font-size: 6vmin;
					cursor: pointer;
				}
			}
		}

		.title {
			flex: 0 0 18vmin;
			display: flex;
			flex-flow: row nowrap;
			background-color: #6ac;
			color: #fff;

			.text {
				flex: 1 1;
				padding: 6vmin;
				height: 18vmin;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}
	}

	.master {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-auto-flow: row;
		grid-auto-rows: 18vmin;
		gap: 2vmin;
		margin: 2vmin;

		& button {
			font-size: 4vmin;
			padding: 2vmin;
		}
	}
</style>