export const rand = (a = 1, b = undefined) => {
	b = !!b ? b : 0

	const max = Math.max(a, b)
	const min = Math.min(a, b)
	const del = max - min

	const off = del > 1
		? Math.floor(Math.random() * del)
		: Math.random() * del

	return min + off
}

export const pick = (list = []) => list[Math.floor(Math.random() * list.length)]

export const some = (list = [], chance = 0.5) => list.filter(el => Math.random() < chance)

export const shuffle = (list = []) => {
	const wt = list.map((el, id) => ({wt: Math.random(), id}))
	wt.sort((a, b) => (a.wt - b.wt))
	return wt.map(el => list[el.id])
}

export const shit = e => !!e

/**
 * Опираясь на число N возвращает уместную форму слова
 * @param n - число
 * @param single - форма ед.ч. (письмо)
 * @param double - форма дв.ч. (письма)
 * @param multi - форма мн.ч. (писем)
 */
export const pluralize = (n, single, double, multi) => {
	const centum = Math.abs(n) % 100
	const decem = (centum / 10) << 0
	
	if (decem === 1) {
		return multi
	}
	const digit = centum % 10
	
	switch (digit) {
		case 1:
			return single
		case 2:
		case 3:
		case 4:
			return double
		default:
			return multi
	}
}