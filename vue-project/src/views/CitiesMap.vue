<template>
  <main>
    <h1>Météo - Carte</h1>

    <p v-if="loading">Requête en cours...</p>
    <p v-else-if="error" class="error">{{ error }}</p>

    <div v-else class="map-wrapper">
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        />

        <l-marker
  v-for="city in cities"
  :key="city.id"
  :lat-lng="city.coordinates"
>
  <l-popup>
    <div>
      <h2>{{ city.name }}</h2>
      <p>Météo : {{ city.weather }}</p>
      <p>Température : {{ city.temperature }} °C</p>
    </div>
  </l-popup>
</l-marker>
      </l-map>
    </div>
  </main>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'

export default {
  name: 'CitiesMap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      zoom: 6,
      center: [45.75, 4.85],
      cities: [],
      loading: false,
      error: null
    }
  },
  async created() {
    this.loading = true
    this.error = null

    try {
      const citiesData = [
  {
    id: 1,
    name: 'Valence',
    coordinates: [44.9334, 4.8924],
    weather: 'Ensoleillé',
    temperature: 18.5
  },
  {
    id: 2,
    name: 'Lyon',
    coordinates: [45.764, 4.8357],
    weather: 'Peu nuageux',
    temperature: 17.2
  },
  {
    id: 3,
    name: 'Grenoble',
    coordinates: [45.1885, 5.7245],
    weather: 'Nuageux',
    temperature: 15.8
  }
]

      this.cities = citiesData
    } catch (error) {
      this.error = error.message
    } finally {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.map-wrapper {
  height: 500px;
  margin-top: 20px;
}

:deep(.leaflet-container) {
  height: 100%;
  width: 100%;
}

.error {
  color: red;
}
</style>