<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
    <article>
        <p>{{ name }}</p>
        <input type="checkbox">
    </article>
</template>

<style scoped>
article {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  padding: 1em;
  margin: 0.5em 0;
  border-radius: 0.5em;
  width: 100%;
  box-sizing: border-box;
}

input[type=checkbox] {
  width: 2rem;
  height: 2rem;
  vertical-align: middle;
  -webkit-appearance: none;
  background: none;
  border: 0;
  outline: 0;
  flex-grow: 0;
  border-radius: 50%;
  background-color: #FFFFFF;
  transition: background 300ms;
  cursor: pointer;
}

input[type=checkbox]:checked {
  background-color: green;
}

</style>