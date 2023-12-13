<script setup>
import ArtworkData from '@/components/ArtworkData.vue'
</script>

<template>
  <h2>ArtWork Profile</h2>
  <Suspense> <ArtworkData /><template #fallback> Loading... </template></Suspense>
</template>

<style>
h2 {
  text-align: center;
  margin-top: 2rem;
}
</style>
