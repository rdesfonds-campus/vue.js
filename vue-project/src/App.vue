<template>
  <main>
    <h1>Météo</h1>
    <button @click="onListClick">Voir la liste des villes</button>

    <CitiesList />
  </main>
</template>

<script>
import CitiesList from './views/CitiesList.vue'

export default {
  name: 'App',
  components: {
    CitiesList
  },
  methods: {
    onListClick() {
      alert('Tu as cliqué sur la liste des villes')
    }
  }
}
</script>