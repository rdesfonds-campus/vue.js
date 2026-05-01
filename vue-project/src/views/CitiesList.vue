<template>
  <main>
    <h1>Météo - Liste des villes</h1>

    <p v-if="loading">Requête en cours...</p>
    <p v-else-if="error" class="error">{{ error }}</p>
    <p v-else-if="cities.length === 0">Aucune donnée à afficher</p>

    <div v-else class="cities-list">
      <City
        v-for="city in cities"
        :key="city.id"
        :name="city.name"
        :weather="city.weather"
        :temperature="city.temperature"
        :updatedAt="city.updatedAt"
      />
    </div>
  </main>
</template>

<script>
import City from '../components/City.vue'

export default {
  name: 'CitiesList',
  components: {
    City
  },
  data() {
    return {
      cities: [],
      loading: false,
      error: null
    }
  },
  async created() {
    this.loading = true
    this.error = null

    const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&past_days=0&forecast_days=7'

    try {
      const response = await fetch(url)
      const data = await response.json()

      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données météo')
      }

      if (!data.hourly || !data.hourly.time || !data.hourly.temperature_2m) {
        throw new Error('Format de données inattendu')
      }

      this.cities = data.hourly.time.slice(0, 5).map((time, index) => {
  const date = new Date(time)

  return {
    id: index + 1,
    name: `Prévision ${date.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    })}`,
    weather: 'Température prévue',
    temperature: data.hourly.temperature_2m[index],
    updatedAt: date
  }
})
    } catch (error) {
      this.error = error.message
    } finally {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.cities-list {
  display: grid;
  gap: 16px;
}

.error {
  color: red;
}
</style>