<script setup>
import { useInputStore } from '@/stores/inputStore'

const inputStore = useInputStore()
</script>

<template>
  <div class="form">
    <label>Please type in the keyword of the artwork:</label>
    <div>
      <input
        type="text"
        @input="(event) => (inputStore.input = event.target.value)"
        :value="inputStore.input"
      />
      <button @click="inputStore.onSumbit(inputStore.input)">Search</button>
    </div>
  </div>
</template>

<style>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  gap: 1rem;
  font-size: 1.5rem;
}

button {
  margin-left: 1rem;
  font-size: 1.5rem;
  box-shadow: 2px 3px 2px #ecebe9;
  border-radius: 3px;
}
button:hover {
  cursor: pointer;
}
button:active {
  box-shadow: none;
  transform: translate3d(2px, 2px, 3px);
}
input {
  font-size: 1.5rem;
}

@media screen and (max-width: 450px) {
  .form div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    align-items: center;
  }
}
</style>
