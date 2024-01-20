import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

const store = createStore({
	state() {
		return {
			frameworks: {
				"Vue": [
					{
						name: "This website",
						desc: "Track your web projects",
						done: false,
						months: 1,
					}
				]
			},
			count: 1
			
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
		test(state, num) {
			state.count += num
		}

	}
})

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
