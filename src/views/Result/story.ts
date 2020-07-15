import { 
	pick,
	rand,
	pluralize,
	shit,
	some,
	shuffle,
} from '@/utils/Rand'

const goal = (id, name, test = () => true) => ({id, name, test})

const BASE_GOALS = [
	goal('bunker', 'Выжить в бункере'),
	goal('reprod', 'Дать потомство'),
	goal('survival', 'Выжить в новых условиях'),
]

const OPT_GOALS = [
	goal('food', 'Обеспечить себя едой'),
	goal('water', 'Обеспечить себя водой'),
	goal('medicine', 'Победить болезнь'),
	goal('defence', 'Защитить себя'),
	goal('getout', 'Суметь выбраться'),
]

const goals = {}

const set_goals = () => {
	Object
		.keys(goals)
		.forEach(key => delete goals[key])
	const set = [
		...BASE_GOALS,
		...some(OPT_GOALS)
	]
	set.forEach(item => goals[item.id] = item)
}


const stress_fails = (male, female, incidents) => {
	const pop = male + female

	const reason = [
		pop < 2 && 'Жизнь хиккана оказалась не такой сладкой, как можно подумать: серые стены, низкий потолок... Отсутствие интернета!',
		pop == 2 && 'Казалось бы, что эти двое могли не поделить, а ведь нашлось же...',
		male == 1 && female == 1 && 'Эти двое оказались не самой идеальной парой. Едва ли можно найти пару хуже.',
		male < 1 && 'Возможно, будь среди них мужчина, этого удалось бы избежать.',
		female < 1 && 'Да, на корабле женщина, может, и к беде, но здесь её явно не хватало.',
		pop > 1 && `Кто же знал, что среди вас окажется ${pick(['маньяк', 'псих', 'буйный'])}.`,
		pop > 3 && 'Наркотики, оружие, дурная компания и всё это в тесном замкнутом помещении.',
		pop > 5 && `Казалось бы коллектив такого размера должен справляться со стрессом лучше. Но чего-то вам не хватило. Может, ${pick(['музыканта', 'танцовщицы', 'крепкой руки закона'])}?`,
		incidents > 1 && pop > 1 && 'Долго куковать среди трупов не удалось.',
		incidents > 1 && pop < 2 && 'Но этим дело, увы, не закончилось.',
		incidents > 3 && 'А ведь вам со столькими инцидентами удалось справиться',
	].filter(shit)

	return shuffle(reason)
}



export const make_story = () => {
	set_goals()

	const days = rand(2, 8) * 30 + rand(0, 6)
	const days_desc = pluralize(days, `${days} день`, `${days} дня`, `${days} дней`)

	const male = Math.max(0, rand(1, 3) + rand(0, 2) + rand(0, 3) - 2)
	const female = Math.max(0, rand(1, 3) + rand(0, 2) + rand(0, 3) - 2)
	const popul = male + female

	if (popul < 1) return make_story()

	const male_desc = `${male} ${pluralize(male, 'мужчина', 'мужчины', 'мужчин')}`
	const female_desc = `${female} ${pluralize(female, 'женщина', 'женщины', 'женщин')}`

	const pron_id = pick([
		popul > 1 && 5,
		male < 1 && female < 2 && 2, 
		female < 1 && male < 2 && 1, 
	].filter(shit))

	const no_male = pick([
		' и ни одного мужчины', 
		`, а с ${pluralize(female, 'нею', 'ними', 'ними')} ни одного мужчины`,
		`, мужчин с ${pluralize(female, 'нею', 'ними', 'ними')} не было`,
	])
	const no_female = pick([
		`, женщин с ${pluralize(male, 'ним', 'ними', 'ними')} не было`,
		' совсем без женщин',
		' и ни одной женщины',
	])
	const pop_desc = pick([
		male > 0 && female > 0 && `${male_desc} и ${female_desc}`,
		male > 0 && female > 0 && `${female_desc} и ${male_desc}`,
		male < 1 && `${female_desc}${no_male}`,
		female < 1 && `${male_desc}${no_female}`,
	].filter(shit))

	console.log('======================')
	console.log(goals)
	const in_bunker = bunker_story(male, female, days)
	const outside = in_bunker.failed
		? []
		: aftermath(male, female)

	return {
		title: pick([
			'Вот и всё...',
			'Жребий брошен...',
			'Ставки сделаны...',
			'Что ж, посмотрим...',
		]),

		entry: pick([
			`${popul} ${pluralize(popul, 'человек вошёл', 'человека вошли', 'человек вошло')} в бункер: ${pop_desc}.`
		]),

		setup: pick([
			`${pluralize(pron_id, 'Ему', 'Ей', 'Им')} предстояло пережить ${days_desc} в бункере.`,
			`Впереди у н${pluralize(pron_id, 'его', 'её', 'их')} были долгие ${days_desc} в бункере.`,
			`На ближайшие ${days_desc} этот бункер станет ${pluralize(pron_id, 'его', 'её', 'их')} домом... или?..`,
			`Следующие ${days_desc} ${pluralize(pron_id, 'он', 'она', 'они')} провед${pluralize(pron_id, 'ёт', 'ёт', 'ут')} в этом бункере.`,
		]),

		bunker: in_bunker.story,
		
		aftermath: outside,

		restart: pick([
			'Или нет?..',
			'А может, всё было иначе?',
			'Но есть и другие варианты...',
		])
	}
}

const bunker_story = (male, female, days) => {
	const res = {
		story: [],
		failed: false
	}

	const stress_factor = 1 - 0.9 ** Math.abs(male - female)
	const stress_random = rand() * rand()
	const stress_total = 1- (1 - stress_factor) * (1 - stress_random)
	console.log(stress_factor, stress_random, stress_total)

	const {
		morale,
		incidents,
		inc_days
	} = morale_test(days, stress_total)

	console.log(morale, incidents, inc_days)

	switch(true) {
		case morale < 0: {
			res.failed = true
			res.story.push(pick([
				'Однако стресс жизни в бункере взял своё'
			]))

			res.story.push(pick([
				`Первый инцидент случился на ${inc_days[0]} день.`
			]))

			if (incidents > 2) {
				res.story.push(pick([
					`За ним последовали многие другие.`
				]))
			}

			res.story.push(...stress_fails(male, female, incidents))

			if (incidents > 1) {
				res.story.push(pick([
					`На ${inc_days[inc_days.length - 1]} день всё было кончено.`
				]))
			} else {
				res.story.push(pick([
					`Этого оказалось более чем достаточно.`
				]))
			}

			res.story.push(pick([
				`О дальнейшем выживании можно забыть.`
			]))

			break
		}
		case morale < 1: {
			res.failed = false

			res.story.push(pick([
				`Стены бункера и весь накопленный стресс остались позади.`,
				`Наконец-то свежий воздух... или не очень? Все злоключения жизни в бункере остались позди.`,
				`Испытание оказалось непростым, но вполне преодолимым.`
			]))

			if (incidents > 0) {
				res.story.push(pick([
					`И это не смотря на некоторые инциденты.`
				]))
			}

			break
		}
		case morale <= 2: {
			res.failed = false

			res.story.push(pick([
				`Пф-ф-ф! Бункер. Дайте два!`,
			]))

			break
		}
	}

	console.log(res)
	return res
}

const morale_test = (days, stress) => {
	const res = {
		morale: 1,
		incidents: 0,
		inc_days: []
	}

	for (let i = 0; i < days; i++) {
		if (res.morale <= 0) return res
		const roll = rand() - stress
		res.morale += roll
		res.morale = Math.min(res.morale, 2)

		const inc = rand() - res.morale
		if (inc > 0) {
			res.inc_days.push(i + 1)
			res.incidents += 1
			const threat = 1 - res.morale
			res.morale -= threat * rand()
		}
	}

	return res
}

const aftermath = (male, female) => {}