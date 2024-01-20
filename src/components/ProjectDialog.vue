<script setup lang="ts">
</script>

<template>
    <dialog>
        <p style="text-align: center">Project Options</p>
        <form action="dialog" onsubmit="save">
            <label for="name">Name</label>
            <input type="text" id="name" name="name">

            <label for="name">Description</label>
            <textarea id="name" name="name"/>

            <label for="months">Months</label>
            <input type="number" id="months" name="months">

            <button type="submit">Save</button>
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