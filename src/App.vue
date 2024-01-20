<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import Framework from './components/Framework.vue';
import ProjectDialog from './components/ProjectDialog.vue'

</script>

<script lang="ts">
export default {
  data() {
    return {
      frameworksList: [],
      projectsList: {}
    }
  },
  methods: {
		addProject(pframework, pname, pdesc, pdone, pmonths) {
			this.$store.commit('addProject', {
        framework: pframework,
        name: pname,
        desc: pdesc,
        done: pdone,
        months: pmonths
      })
		},
    loadFrameworks() {
      return ["React", "Vue", "Angular"]; // todo: HTTP GET data from backend, not hardcoded
    },
    loadProjects() {
			return this.$store.state.frameworks
    },
  },
  computed: {
    monthsInFramework() {
      let months = {}
      for(let i = 0; i < this.frameworksList.length; i++) {
        let frameworkName = this.frameworksList[i]
        let projects = this.projectsList[frameworkName]
        months[frameworkName] = 0

        if(!projects) {
          continue;
        }

        for(let j = 0; j < projects.length; j++) {
          months[frameworkName] += projects[j].months;
        }
      }
      return months;
    },
    completedProjectsInFramework() {
      let completed = {}
      for(let i = 0; i < this.frameworksList.length; i++) {
        let frameworkName = this.frameworksList[i]
        let projects = this.projectsList[frameworkName]
        completed[frameworkName] = 0

        if(!projects) {
          continue;
        }

        for(let j = 0; j < projects.length; j++) {
          if(projects[j].done) {
            completed[frameworkName] += 1
          }
        }
      }
      return completed; 
    }
  },
  mounted() {
		this.addProject("Vue", "my project", "cool", false, 3)
    this.frameworksList = this.loadFrameworks();
    this.projectsList = this.loadProjects();
    console.log(this.projectsList)
  }
}
</script>

<template>
  <main>
    <Framework
      v-for="framework in frameworksList"
      :key="framework"
      :name="framework"
      :months="monthsInFramework[framework]"
      :completed="completedProjectsInFramework[framework]"
      :projects="projectsList[framework]"
      ></Framework>
  </main>
  <ProjectDialog/>
</template>

<style scoped>
main {
  margin: auto;
  max-width: 40em;
}
</style>
