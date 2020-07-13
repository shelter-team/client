import {
	BASE_ROUTE
} from './config'

import Home from './page/index.vue'

const complete = (sub: string) => `${BASE_ROUTE}/${sub}`

const routes = [
	{
		path: BASE_ROUTE,
		redirect: {
			name: 'sess-home'
		}
	},
	{
		path: complete('list/'),
		name: 'sess-home',
		component: Home,
	},
]

export default routes