<template>
  <article class="city-card">
    <h2>{{ name }}</h2>
    <p>Météo : {{ weather }}</p>
    <p>Température : {{ temperature }} °C</p>
    <p>Mise à jour : {{ formattedUpdatedAt }}</p>
  </article>
</template>

<script>
import { format } from 'timeago.js'

export default {
  name: 'City',
  props: ['name', 'weather', 'temperature', 'updatedAt'],
  computed: {
    formattedUpdatedAt() {
      return format(this.updatedAt, 'fr')
    }
  }
}
</script>

<style scoped>
.city-card {
  padding: 16px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h2 {
  margin-top: 0;
  margin-bottom: 12px;
}

p {
  margin: 8px 0;
}
</style>