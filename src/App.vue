<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Framework from './components/Framework.vue';
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
