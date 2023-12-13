<script setup>
import SearchForm from '../components/SearchForm.vue'
import Result from '../components/Result.vue'
</script>

<template>
  <SearchForm />
  <Suspense> <Result /><template #fallback> Loading... </template></Suspense>
</template>
