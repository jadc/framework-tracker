import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

const store = createStore({
	state() {
		return {
			frameworks: {},
		}
	},
	mutations: {
		addProject(state, project) {
			if (state.frameworks[project.framework]) {
				state.frameworks[project.framework].push({
					name: project.name,
					desc: project.desc,
					done: project.done,
					months: project.months
				})
			} else {
				state.frameworks[project.framework] = []
				state.frameworks[project.framework].push({
					name: project.name,
					desc: project.desc,
					done: project.done,
					months: project.months
				})
			}
		},
		initStore(state) {
			if(localStorage.getItem('store')) {
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				)
			}
		}
	}
})
store.subscribe((mutation, state) => {
	localStorage.setItem('store', JSON.stringify(state))
})

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
