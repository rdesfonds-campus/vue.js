<template>
  <article class="city-card">
    <h2>{{ name }}</h2>
    <p>Météo : {{ weather }}</p>
    <p>Température : {{ temperature }} °C</p>
    <p>Mise à jour : {{ formattedUpdatedAt }}</p>
  </article>
</template>

<script>
import { format, register } from 'timeago.js'

const localeFr = (number, index) => {
  return [
    ["à l'instant", 'dans un instant'],
    ['il y a %s secondes', 'dans %s secondes'],
    ['il y a 1 minute', 'dans 1 minute'],
    ['il y a %s minutes', 'dans %s minutes'],
    ['il y a 1 heure', 'dans 1 heure'],
    ['il y a %s heures', 'dans %s heures'],
    ['il y a 1 jour', 'dans 1 jour'],
    ['il y a %s jours', 'dans %s jours'],
    ['il y a 1 semaine', 'dans 1 semaine'],
    ['il y a %s semaines', 'dans %s semaines'],
    ['il y a 1 mois', 'dans 1 mois'],
    ['il y a %s mois', 'dans %s mois'],
    ['il y a 1 an', 'dans 1 an'],
    ['il y a %s ans', 'dans %s ans']
  ][index]
}

register('fr_custom', localeFr)

export default {
  name: 'City',
  props: ['name', 'weather', 'temperature', 'updatedAt'],
  computed: {
    formattedUpdatedAt() {
      return format(this.updatedAt, 'fr_custom')
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