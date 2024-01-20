<script setup lang="ts">
</script>

<template>
    <button class="add">Add</button>
</template>

<style>
button {
    all: unset;
    display: block;
    margin: auto;
    padding: 0.25em 1em;
    line-height: 16px;
    border-radius: 4px;
    border: 1px solid grey;
    cursor: pointer;
}

button:hover {
    background-color: #e8e8e8;
}

.add::before {
    content: url("../assets/plus.svg");
    float: left;
    width: 16px;
    height: 16px;
    margin-right: 0.5em;
}
</style>