export type TPerson = {
	age: number;
}

export const defaultPerson = (): TPerson => ({
	age: 0,
})
