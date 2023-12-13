import { defineStore } from 'pinia'

export const useArtworkStore = defineStore('artworkStore', {
  state: () => ({
    artwork: {},
    imageURL: ''
  }),
  getters: {},
  actions: {
    async fetchImageURL(id) {
      const res = await fetch(
        `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id`
      ).then((res) => res.json())
      const imgId = await res.data.image_id
      const configURL = await res.config.iiif_url
      return `${configURL}/${imgId}/full/843,/0/default.jpg`
    },
    async fetchArtData(id) {
      const res = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`).then((res) =>
        res.json()
      )
      return res.data
    }
  }
})
