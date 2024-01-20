<script setup lang="ts">
defineProps<{
  name: string,
  months: number,
  done: boolean
}>()
</script>

<template>
    <article>
        <p>{{ name }}</p>
        <span style="display: flex; align-items: center;">
          <p>{{ months }} months</p>
          <input type="checkbox">
        </span>
    </article>
</template>

<style scoped>
article {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e2e4e7;
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
  margin-left: 1em;
}

input[type=checkbox]:checked {
  background-color: rgb(102, 140, 223);
}

</style>