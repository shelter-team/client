import {
	rand,
	pick
} from '@/utils/Rand'

const randID = () => Math.random().toString(36).slice(-8)

export type TPerson = {
	id: string
	name: string
	age: number;
	sex: 'f'|'m',
	gender: 's'|'b'|'h',
	profession: string
	health: string
	hobby: string
	trait: string
	phobia: string
	perk: string
	baggage: string
}

export const defaultPerson = (id = randID()): TPerson => ({
	id,
	name: `Игрок ${+id + 1}`,
	age: rand(6, 20) + rand(6, 20) + rand(6, 20),
	sex: pick(['f', 'm']),
	gender: pick([
		's','s','s','s','s','s',
		'b','b','b',
		'h',
	]),
	profession: pick([
		'Блогер',
		'Писатель',
		'Фотограф',
		'Повар',
		'Переводчик',
		'Хирург',
		'Физик',
		'Геолог',
	]),
	health: pick([
		'Глухонемой',
		'Идеальное здоровье',
		'Дальтонизм',
		'Ожирение',
		'Вич инфицирован 1 стадия (осталось жить 5 лет)',
	]),
	hobby: pick([
		'Изучение топографических карт',
		'Шитье и вязание',
		'Рисование',
		'Карточные фокусы',
		'Танцы',
	]),
	trait: pick([
		'Буйный',
		'Добрый',
		'Лживый',
		'Настырный',
		'Честный',
	]),
	phobia: pick([
		'Нет фобии',
		'Орнитофобия — боязнь птиц и их перьев',
		'Акрофобия — боязнь высоты',
		'Паразитофобия — боязнь насекомых-паразитов',
		'Библиофобия – боязнь библиотек',
	]),
	perk: pick([
		'Читал все книги про Зомби',
		'Учился в мед. университете 4 года',
		'По первому образованию химик',
		'Владеет языком жестов',
		'Умеет ориентироваться по звездам',
	]),
	baggage: pick([
		'Швейная машинка',
		'3 слитка золота',
		'Пистолет ТТ и 150 патронов',
		'Набор инструментов для электрика',
		'Фотоаппарат',
	]),
})

export const scramble = (p: TPerson): TPerson => {
	const res = {}
	Object
		.keys(p)
		.forEach(key => res[key] = (rand() < 0.5) || ['id', 'name'].includes(key) ? p[key] : null )
		return res as TPerson
}