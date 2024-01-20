<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import Framework from './components/Framework.vue';

</script>

<script>
export default {
  data() {
    return {
      frameworksList: [],
      projectsList: {},
    }
  },
  methods: {
		addProject(framework, projectName, projectDesc, projectDone, projectMonths) {
			let project = 
				{
					name: projectName,
					desc: projectDesc,
					done: projectDone,
					months: projectMonths,
				}
			console.log(project)
			console.log(this.$store.state.frameworks)
			this.$store.commit('addProject', framework, project)
		},
    loadFrameworks() {
      return ["React", "Vue", "Angular"]; // todo: HTTP GET data from backend, not hardcoded
    },
    loadProjects() {
			return this.$store.state.frameworks
    },
  },
  computed: {
    // frameworksExperience() {
    //   for framework in frameworksList
    // }
  },
  mounted() {
		this.addProject("Vue", "my project", "cool", false, 3)
    this.frameworksList = this.loadFrameworks();
    this.projectsList = this.loadProjects();
		console.log(this.$store.state.frameworks)
  }
}
</script>

<template>
  <header>
    <h1>Framework Tracker</h1>
  </header>
  <body>
    <main>
      <Framework
        v-for="framework in frameworksList"
        :key="framework"
        :name="framework"
        :projects="projectsList[framework]"
        ></Framework>
    </main>
  </body>

  <!--<RouterView/>-->
</template>

<style scoped>
header {
  text-align: center;
}

body {
  display: flex;
  justify-content: center;
}

main {
  width: 100%;
  margin: 0 20em; /* todo: media query to remove this on mobile */
}

</style>
