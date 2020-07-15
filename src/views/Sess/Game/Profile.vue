<template lang="pug">
	div
		Trait(
			title="Профессия:"
			value="Физик"
			:active="true"
			icon="🎓"
		)
		Trait(
			title="Здоровье:"
			value="Мигрень"
			:active="false"
			icon="⚕️"
		)
		Trait(
			title="Биологические характеристики:"
			value="Мужчина, 25 лет, гетеросексуален"
			:active="false"
			icon="♂️"
		)
		Trait(
			title="Хобби:"
			value="Танцы"
			:active="false"
			icon="⚽"
		)
		Trait(
			title="Человеческое качество:"
			value="Настырный"
			:active="false"
			icon="🙂"
		)
		Trait(
			title="Фобия:"
			value="Нет фобии"
			:active="true"
			icon="😱"
		)
		Trait(
			title="Доп. информация:"
			value="Умеет ориентироваться по звездам"
			:active="true"
			icon="ℹ️"
		)
		Trait(
			title="Багаж:"
			value="Фотоаппарат"
			:active="false"
			icon="👜"
		)
	//-вшм
		div.block Человеческое качество: Настырный🙂
		div.block Фобия: Нет фобии😱
		div.block Доп. информация: Умеет ориентироваться по звездамℹ️
		div.block Багаж: Фотоаппарат👜
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

import Trait from '@/comp/Trait'


export default Vue.extend({
	name: 'ProfileCard',
	
	components: {
		Trait,
	},

	props: {
		
	},

	computed: {
		...mapState(['sess'])
	}
})
</script>

<style lang="scss" scoped>
	
</style>
