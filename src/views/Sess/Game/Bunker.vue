<template lang="pug">
	div.list
		div.sep 
		div.key Вместимость:
		div.val 7 чел.
		div.sep
		div.key Площадь:
		div.val 70 м
			sup 2
		div.sep
		div.key Время пребывания:
		div.val 60 дней
		div.sep
		div.row Спальные места и все необходимое для поддержания гигиены
		div.sep
		div.row Запас питьевой воды и продовольствия на время нахождения в бункере
		div.sep
		div.row Медицинский кабинет с набором инструментов и препаратов
		div.sep
		div.row Кулинарные книги
		div.sep
</template>

<script>
import Vue from 'vue'

import { mapState } from 'vuex'

export default Vue.extend({
	name: 'BunkerCard',
	
	components: {
	},

	props: {
		
	},

	computed: {
		...mapState(['sess'])
	}
})
</script>

<style lang="scss" scoped>
	.list {
		display: grid;
		grid-template-columns: auto auto;
		gap: 0 2vmin;

		& * {
			font-size: 75%;
		}

		.row {
			grid-column: 1 / 3;
			/* font-size: 80%; */
		}
		.sep {
			grid-column: 1 / 3;
			margin: 2vmin 0;
			border-top: 1px dotted;
		}
		.key {
			/* font-size: 80%; */
			font-weight: bold;
		}
		.val {
			/* font-size: 80%; */
			text-align: right
		}
	}
</style>
