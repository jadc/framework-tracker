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
      projectsList: {},
      dialogOpen: false,

      // this is poor style, there was a better way to do things that did not involve this variable
      frameworkOfNewProject: ""
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
    openDialog(framework) {
      console.log('framework', framework)
      this.frameworkOfNewProject = framework;
      this.dialogOpen = true;
    },
    saveProject(name, description, months) {
      let newProject = {
        name: name,
        desc: description,
        done: false,
        months: months,
      };

      if(!this.projectsList[this.frameworkOfNewProject]) {
        this.projectsList[this.frameworkOfNewProject] = []
      }

      console.log('adding new project', this.projectsList[this.frameworkOfNewProject])
      this.projectsList[this.frameworkOfNewProject].push(newProject)

      console.log('projectsList[', this.frameworkOfNewProject, ']=', this.projectsList[this.frameworkOfNewProject])

      this.dialogOpen = false;
    }
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
    this.$store.commit("initStore")
    this.frameworksList = this.loadFrameworks();
    this.projectsList = this.loadProjects();
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
      @openDialog="openDialog"
      ></Framework>
  </main>
  <ProjectDialog v-if="dialogOpen" @saveProject="saveProject" :framework="frameworkOfNewProject"/>
</template>

<style scoped>
main {
  margin: auto;
  max-width: 40em;
}
</style>
