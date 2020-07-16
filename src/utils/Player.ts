import { shit, pluralize } from "./Rand"

export const biology = (player) => {
	const sex = {
		'f': {
			name: 'Женщина',
			gender: {
				's': 'гетеросексуальна',
				'b': 'бисексуальна',
				'h': 'гомосексуальна'
			} 
		},
		'm': {
			name: 'Мужчина',
			gender: {
				's': 'гетеросексуален',
				'b': 'бисексуален',
				'h': 'гомосексуален'
			} 
		}
	}

	return [
		player.sex && sex[player.sex].name,
		player.age && `${player.age} ${pluralize(player.age, 'год', 'года', 'лет')}`,
		player.sex && player.gender && sex[player.sex].gender[player.gender],
	].filter(shit).join(', ')
}