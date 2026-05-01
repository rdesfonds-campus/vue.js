<template>
  <main>
    <h1>Météo - Liste des villes</h1>

    <City
      name="Ma ville"
      weather="Peu nuageux"
      :temperature="20.55"
      :updatedAt="new Date()"
    />
  </main>
</template>

<script>
import City from '../components/City.vue'

export default {
  name: 'CitiesList',
  components: {
    City
  }
}
</script>