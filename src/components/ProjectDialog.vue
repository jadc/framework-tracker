<script setup lang="ts">

let projectName = ""
let projectDesc = ""
let projectMonths = 0

const emit = defineEmits(['saveProject'])

function save() {
    emit('saveProject', projectName, projectDesc, projectMonths)
}

</script>

<template>
    <dialog open>
        <p style="text-align: center">New Project</p>
        <form>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" v-model="projectName">

            <label for="name">Description</label>
            <textarea id="name" name="name" v-model="projectDesc"/>

            <label for="months">Months</label>
            <input type="number" id="months" name="months" v-model="projectMonths">

            <button @click.prevent="save">Save</button>
        </form>
    </dialog>
</template>

<style>
dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 1em;
    border: none;
    border-radius: 0.25em;
    box-shadow: 0 0.5em 0.5em 0 black;
}

dialog input {
    margin: 0.5em 0;
    padding: 0.5em;
    font-size: 1.5em;
}

dialog textarea {
    margin: 0.5em 0;
    padding: 0.5em;
}

form {
    display: flex;
    flex-direction: column;
}
</style>