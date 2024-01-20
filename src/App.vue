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
