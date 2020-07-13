import Vue from 'vue'


// App essentials
import router from '@/router'
import store from '@/store'

// App itself
import App from '@/app/App.vue'

// Nice things
import './styles/global.scss'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

const app = new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App),
	components: { App },
})

export default app
