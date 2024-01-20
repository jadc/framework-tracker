<script setup lang="ts">
import Project from './Project.vue'
import Button from "./Button.vue"

defineProps<{
  name: string
  projects: Array<any>
  months: number
  completed: number
}>()
</script>

<template>
    <section>
        <div class="title">
            <div style="display: flex; align-items: center;">
                <img src="../assets/logo.svg" alt="Icon">
                <h2>{{ name }}</h2>
            </div>
            <div style="text-align: right">
                <p>{{ completed }} completed projects</p>
                <p>{{ months }} months of experience</p>
            </div>
        </div>
        <div class="list">
            <Project
                v-for="project in projects"
                :key="project.name"
                :name="project.name"
                :months="project.months"
                :done="project.done"
            ></Project>
        </div>
        <Button/>
    </section>
</template>

<style scoped>
section {
    box-sizing: border-box;
    width: 100%;
    padding: 2em;
    margin: 2em 0;

    background-color: #f5f5f5;
    border-radius: 0.5em;
    box-shadow: 0 0.25em 0.5em 0 rgba(0,0,0,0.5);
    transition: 250ms box-shadow cubic-bezier(.42,0,.58,1);
}

section:hover {
    box-shadow: 0 0.5em 1em 0 rgba(0,0,0,0.5);
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

img {
    width: 4em;
    aspect-ratio: 1/1;
    margin-right: 1em;
}
</style>