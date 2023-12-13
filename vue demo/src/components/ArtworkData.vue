<script setup>
import { useRoute } from 'vue-router'
import { useArtworkStore } from '@/stores/artworkStore'
const artworkStore = useArtworkStore()
const route = useRoute()
let id = route.params.id

artworkStore.imageURL = await artworkStore.fetchImageURL(`${id}`)
artworkStore.artwork = await artworkStore.fetchArtData(`${id}`)
</script>

<template>
  <div class="wrapper">
    <h3>{{ artworkStore.artwork.title }}</h3>

    <div class="imgContainer"><img :src="artworkStore.imageURL" alt="artwork picture" /></div>
    <div class="details">
      <p>Author Details: {{ artworkStore.artwork.artist_display }}</p>
      <p>Size: {{ artworkStore.artwork.dimensions }}</p>

      <ul>
        Classification:
        <li v-for="name in artworkStore.artwork.classification_titles">{{ name }}</li>
      </ul>

      <p>
        Description:
        {{
          artworkStore.artwork.description
            ? artworkStore.artwork.description.slice(3, artworkStore.artwork.description.length - 5)
            : 'No description yet.'
        }}
      </p>
    </div>
  </div>
</template>

<style>
.wrapper {
  margin: 1.5rem;
  gap: 1rem;
  color: #a0c8c3;
}
h3 {
  margin-bottom: 1rem;
  text-align: center;
}
.imgContainer {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.wrapper p {
  line-height: 2rem;
}

.wrapper ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
