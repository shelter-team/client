import Vue from 'vue';
import VueRouter from 'vue-router'

import Session from '@/mods/Session/route'

import NotFound from '@/app/404.vue'

Vue.use(VueRouter)

const routes = [
	...Session,
	{
		path: '*',
		component: NotFound
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
