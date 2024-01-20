<script setup lang="ts">

let projectName = ""
let projectDesc = ""
let projectMonths = 0

const props = defineProps<{
  editing: boolean
}>()

const emit = defineEmits(['saveProject'])

function save() {
    emit('saveProject', projectName, projectDesc, projectMonths)
}

</script>

<template>
    <dialog open>
        <p style="text-align: center">{{ editing ? "Edit" : "Add" }} Project</p>
        <form>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" v-model="projectName">

            <label for="name">Description</label>
            <textarea id="name" name="name" v-model="projectDesc"/>

            <label for="months">Months</label>
            <input type="number" min="0" id="months" name="months" v-model="projectMonths">

            <span>
                <button @click.prevent="save">Save</button>
                <button vue-if="editing" @click.prevent="delete">Delete</button>
            </span>
        </form>
    </dialog>
</template>

<style>
dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 1em;
    border: none;
    border-radius: 0.25em;
    box-shadow: 0 0.25em 1em 0 black;
}

dialog input {
    margin: 0.5em 0;
    padding: 0.5em;
    font-size: 1.5em;
    border: 1px solid #eee;
    border-radius: 0.5em;
}

dialog textarea {
    margin: 0.5em 0;
    border: none;
    padding: 0.5em;
    border: 1px solid #eee;
    border-radius: 0.5em;
}

form {
    display: flex;
    flex-direction: column;
}

dialog span {
    display: flex;
    margin-top: 0.5em;
    justify-content: space-around;
}
</style>