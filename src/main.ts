import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

const store = createStore({
	state() {
		return {
			frameworks: {}
		}
	},
	mutations: {
		addProject(state, framework, project) {
			if (state.frameworks[framework]) {
				state.frameworks[framework].push(project)
			} else {
				state.frameworks[framework] = []
				state.frameworks[framework].push(project)
			}
		}
	}
})

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
