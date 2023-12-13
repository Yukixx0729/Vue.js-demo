<script setup>
import { useInputStore } from '@/stores/inputStore'

const inputStore = useInputStore()
console.log(inputStore.results)
</script>

<template>
  <ul class="results">
    <li v-for="artwork in inputStore.results" :key="`artwork-${artwork.id}`">
      <router-link :to="`/artwork/${artwork.id}`"> {{ artwork.title }}</router-link>
    </li>
  </ul>
</template>

<style>
.results {
  margin-top: 3rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
}

.results li {
  padding: 0.5rem;
}

li a {
  color: #4c8891;
  font-size: 1.2rem;
}
li a:hover {
  cursor: pointer;
  color: #a0c8c3;
}
</style>
