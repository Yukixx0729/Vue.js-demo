<script setup>
import HomePage from './views/HomePage.vue'
</script>

<template>
  <h1>
    <router-link to="/"> Art Institute of Chicago API</router-link>
  </h1>
  <router-view />
</template>

<style>
* {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  margin: 1rem;
}
html {
  color: #ecebe9;
  background-color: #262225;
}

h1 a {
  text-decoration: none;
  color: #4c8891;
  border: 1px solid #4c8891;
  padding: 3px;
  box-shadow: 3px 3px 2px #a0c8c3;
}

h1 a:hover {
  cursor: pointer;
  color: #a0c8c3;
}
h1 a:active {
  box-shadow: none;
  transform: translate3d(2px, 2px, 3px);
}
</style>
