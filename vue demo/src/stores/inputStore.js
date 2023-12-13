import { defineStore } from 'pinia'

export const useInputStore = defineStore('inputStore', {
  state: () => ({
    input: '',
    results: []
  }),
  getters: {},
  actions: {
    async onSumbit(input) {
      const res = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${input}`).then(
        (res) => res.json()
      )
      this.results = await res.data
      this.input = ''
    }
  }
})
