import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Sess from '@/views/Sess/view.vue'
import Splash from '@/views/Home/view.vue'
import Result from '@/views/Result/view.vue'

Vue.use(VueRouter)

	const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'home',
		component: Splash
	},
	{
		path: '/sess/:id',
		name: 'sess',
		component: Sess,
		props: true,
	},
	{
		path: '/endgame',
		name: 'end',
		component: Result,
		props: true,
	},
	// {
	// 	path: '/about',
	// 	name: 'session',
	// 	component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	// }

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
