<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import Framework from './components/Framework.vue';

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
    // frameworksExperience() {
    //   for framework in frameworksList
    // }
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
      :projects="projectsList[framework]"
      ></Framework>
  </main>
  <!--<RouterView/>-->
</template>

<style scoped>
header {
  text-align: center;
}

main {
  margin: auto;
  max-width: 40em;
}

</style>
