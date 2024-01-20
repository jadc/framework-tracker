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
    loadFrameworks() {
      return ["React", "Vue", "Angular"]; // todo: HTTP GET data from backend, not hardcoded
    },
    loadProjects() {
      return {
        "React": [
          {
            name: "myApp1",
            desc: "it does things",
            done: false,
            months: 3,
          },
          {
            name: "myApp2",
            desc: "it does things",
            done: true,
            months: 5,
          },
        ],
        "Angular": [
          {
            name: "myApp1",
            desc: "it does things",
            done: false,
            months: 3
          },
          {
            name: "myApp2",
            desc: "it does things",
            done: true,
            months: 5
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
  <header>
    <h1>Framework Tracker</h1>
  </header>
  <body>
    <main>
      <Framework name="React"></Framework>
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
