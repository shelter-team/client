<template lang="pug">
	div
		Trait(
			title="Профессия:"
			:value="player.profession || ''"
			:active="true"
			icon="🎓"
		)
		Trait(
			title="Здоровье:"
			:value="player.health || ''"
			:active="false"
			icon="⚕️"
		)
		Trait(
			title="Биологические характеристики:"
			:value="vBiology"
			:active="false"
			:icon="vGender"
		)
		Trait(
			title="Хобби:"
			:value="player.hobby"
			:active="false"
			icon="⚽"
		)
		Trait(
			title="Человеческое качество:"
			:value="player.trait"
			:active="false"
			icon="🙂"
		)
		Trait(
			title="Фобия:"
			:value="player.phobia"
			:active="true"
			icon="😱"
		)
		Trait(
			title="Доп. информация:"
			:value="player.perk"
			:active="true"
			icon="⭐"
		)
		Trait(
			title="Багаж:"
			:value="player.baggage"
			:active="false"
			icon="💼"
		)
	//-вшм
		div.block Человеческое качество: Настырный🙂
		div.block Фобия: Нет фобии😱
		div.block Доп. информация: Умеет ориентироваться по звездамℹ️
		div.block Багаж: Фотоаппарат👜
</template>

<script>
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'

import Trait from '@/comp/Trait'
import { shit } from '@/utils/Rand'
import { biology } from '@/utils/Player'


export default Vue.extend({
	name: 'ProfileCard',
	
	components: {
		Trait,
	},

	props: {
		
	},

	computed: {
		...mapState(['sess']),
		...mapGetters('sess', {
			'player': 'getProfile'
			}),

		vGender() {
			switch(this.player.sex) {
				case 'f':
					return '♀️'
				case 'm':
					return '♂️'
			}
		},

		vBiology() {
			const player = this.player
			return biology(player)
		}
	}
})
</script>

<style lang="scss" scoped>
	
</style>
