<script setup lang="ts">
defineProps<{
  target: string
}>()
</script>

<template>
    <button>Add {{ target }}</button>
</template>

<style>
button {
    all: unset;
    display: block;
    margin: auto;
    padding: 0.25em 1em;
    line-height: 16px;
    background-color: white;
    border-radius: 4px;
    border: 1px solid grey;
}

button:hover {
    background-color: #e8e8e8;
}

button::before {
    content: url("../assets/plus.svg");
    float: left;
    width: 16px;
    height: 16px;
    margin-right: 0.5em;
}
</style>