import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Game from '@/views/Game/view.vue'
// import Splash from '@/views/Splash.vue'

Vue.use(VueRouter)

	const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'home',
		component: Game
	},
	{
		path: '/about',
		name: 'About',
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
