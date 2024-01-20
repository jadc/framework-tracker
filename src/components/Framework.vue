<script setup lang="ts">
import Project from './Project.vue'

defineProps<{
  name: string
  projects: array
}>()
</script>

<template>
    <section>
        <div class="title">
            <img src="../assets/logo.svg" alt="Icon">
            <h2>{{ name }} Projects</h2>
        </div>
        <div class="list">
            <Project
                v-for="project in projects"
                :key="project.name"
                :name="project.name"
            ></Project>
        </div>
    </section>
</template>

<style scoped>
section {
    box-sizing: border-box;
    width: 100%;
    padding: 2em;

    background-color: #ccc;
    border-radius: 0.5em;
    box-shadow: 0 0.25em 1em 0 rgba(0,0,0,0.5);
    border: 1px solid #aaa;
}

.title {
    display: flex;
    align-items: center;
}

img {
    width: 4em;
    margin-right: 1em;
}
</style>