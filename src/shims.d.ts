import Vue from 'vue'

declare global {
	interface Document {
		documentMode?: any
	}

	//type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
}
