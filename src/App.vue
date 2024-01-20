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
      temp: ""
    }
  },
  methods: {
    loadFrameworks() {
      return ["React", "Vue", "Angular"]; // todo: HTTP GET data from backend, not hardcoded
    },
    loadProjects() {
      return {
        "React": [
          {
            name: "my react App",
            desc: "it does things",
            done: false,
            months: 3,
          },
          {
            name: "react cookbook app",
            desc: "it does things",
            done: true,
            months: 5,
          },
        ],
        "Angular": [
          {
            name: "angular app",
            desc: "it does things",
            done: false,
            months: 3
          },
        ],
      }
    },
    openDialog(framework) {
      console.log('framework', framework)
      this.temp = framework;
      this.dialogOpen = true;
    },
    saveProject(name, description, months) {
      let newProject = {
        name: name,
        desc: description,
        done: false,
        months: months,
      };

      if(!this.projectsList[this.temp]) {
        this.projectsList[this.temp] = []
      }

      console.log('adding new project', this.projectsList[this.temp])
      this.projectsList[this.temp].push(newProject)

      console.log('projectsList[', this.temp, ']=', this.projectsList[this.temp])

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
  <ProjectDialog v-if="dialogOpen" @saveProject="saveProject" :framework="temp"/>
</template>

<style scoped>
main {
  margin: auto;
  max-width: 40em;
}
</style>
