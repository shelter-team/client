<template lang="pug">
	div.game.container
		Block
			template(#content) DashBoard
		Deck
			Card(
				:order="0"
				:title="`Сценарий: ${sess.scenario}`"
			)
				template(#content).container
					div.block Произошла вполне ожидаемая катастрофа. Мир настигла глобальная эпидемия.
					div.block COVID-19 стремительно распространился по Земле, он имеет сходство с вирусом, живущим в летучей мыши.
					div.block Все предпринятые меры не сдержали распространение и вирус мутировал. Смертность наступала через 24 часа и превысила пик. 
					div.block Паника людей, разрушение улиц и большинства городов. После выхода из бункера улицы переполнены мародерами. 
					div.block Необходимо подумать о своей защите и безопасности. Остаток здорового населения на планете 12%

			Card(
				:order="1"
				title="Бункер"
			)
				template(#content).container
					div.block Вместимсть бункера—7 чел.
					div.block Площадь бункера — 70 м2
					div.block Время пребывания — 60 дней
					div.block Спальные места и все необходимое для поддержания гигиены
					div.block Запас питьевой воды и продовольствия на время нахождения в бункере
					div.block Медицинский кабинет с набором инструментов и препаратов
					div.block Кулинарные книги

			Card(
				:order="2"
				title="Профиль"
			)
				template(#content).container
					div.block Профессия: Физик
					div.block Здоровье: Мигрень
					div.block Биологические характеристики: Мужчина, 25 лет, гетеросексуален
					div.block Хобби: Танцы
					div.block Человеческое качество: Настырный
					div.block Фобия: Нет фобии
					div.block Доп. информация: Умеет ориентироваться по звездам
					div.block Багаж: Фотоаппарат
					
			Card(
				:order="3"
				title="Особые условия"
			)
				template(#content).container
					div.block Карточка раз
					div.block Карточка 2
					
			Card(
				:order="4"
				title="Кандидаты 9/12"
			)
				template(#content).container
					div.block Хуй с горы
					div.block Хуй с горы
					div.block Хуй с горы
	//-div.game.container
		Block
			template(#content) Сценарий: {{ sess.scenario }}
		Block
			template(#content) - Бункер -
		Block
			template(#content) - Профиль -
		Block
			template(#content) - Особ. условия -
		Block
			template(#content) - Кандидаты -
</template>

<script>
import Vue from 'vue'

import Block from '@/comp/Block.vue'
import Deck from '@/comp/Deck.vue'
import Card from '@/comp/Card.vue'
import { mapState } from 'vuex'

export default Vue.extend({
	name: 'Game',
	
	components: {
		Block,
		Deck,
		Card,
	},

	props: {
		id: {
			type: String,
			required: true,
			default: '',
		}
	},

	computed: {
		...mapState(['sess'])
	}
})
</script>
