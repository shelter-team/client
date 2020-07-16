<template lang="pug">
	Deck
		Card.pandemic(
			:order="0"
			:title="`Сценарий: ${sess.scenario}`"
			:current="current"
			@update="onUpdateCurrent"
		)
			template(#content).container
				p Произошла вполне ожидаемая катастрофа. Мир настигла глобальная эпидемия.
				p COVID-19 стремительно распространился по Земле, он имеет сходство с вирусом, живущим в летучей мыши.
				p Все предпринятые меры не сдержали распространение и вирус мутировал. Смертность наступала через 24 часа и превысила пик. 
				p Паника людей, разрушение улиц и большинства городов. После выхода из бункера улицы переполнены мародерами. 
				p Необходимо подумать о своей защите и безопасности. Остаток здорового населения на планете 12%

		Card.bunker(
			:order="1"
			:title="`Бункер (${sess.bunker.capacity} мест)`"
			:current="current"
			@update="onUpdateCurrent"
		)
			template(#content)
				Bunker

		Card(
			:order="2"
			title="Характеристики"
			:current="current"
			@update="onUpdateCurrent"
		)
			template(#content).container
				Profile

		Card(
			:order="3"
			title="Особые условия"
			:current="current"
			@update="onUpdateCurrent"
		)
			template(#content).container
				div.block Карточка раз
				div.block Карточка 2
				
		Card(
			:order="4"
			title="Кандидаты 9/12"
			:current="current"
			@update="onUpdateCurrent"
		)
			template(#content)
				Players
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

import Block from '@/comp/Block.vue'
import Deck from '@/comp/Deck.vue'
import Card from '@/comp/Card.vue'

import Bunker from './Game/Bunker'
import Profile from './Game/Profile'
import Players from './Game/Players'

export default Vue.extend({
	name: 'Game',
	
	components: {
		Block,
		Deck,
		Card,
		Bunker,
		Profile,
		Players,
	},

	props: {
	},

	data: () => ({
		current: -1,
	}),

	computed: {
		...mapState(['sess'])
	},

	methods: {
		onUpdateCurrent(evt) {
			this.current = evt === this.current ? -1 : evt
		}
	}
})
</script>
