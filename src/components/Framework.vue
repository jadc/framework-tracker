<script setup lang="ts">
import Project from './Project.vue'
import Button from "./Button.vue"

const props = defineProps<{
  name: string
  projects: Array<any>
  months: number
  completed: number
  url: string
}>()

const emit = defineEmits(['openDialog'])

function emitDialog() {
    emit('openDialog', props.name)
}
</script>

<template>
    <section>
        <div class="title">
            <div style="display: flex; align-items: center;">
                <div class="icon">
                    <img :src="url" alt="Icon">
                </div>
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
                :desc="project.desc"
            ></Project>
        </div>
        <Button type="submit" @click.prevent="emitDialog"/>
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

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4em;
    margin-right: 1em;
}

img {
    width: 100%;
}

</style>