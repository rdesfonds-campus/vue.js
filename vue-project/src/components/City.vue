<template>
  <article>
    <h2>{{ name }}</h2>
    <p>Météo : {{ weather }}</p>
    <p>Température : {{ temperature }} °C</p>
    <p>Mise à jour : {{ updatedAt.toLocaleString() }}</p>
  </article>
</template>

<script>
export default {
  name: 'City',
  props: ['name', 'weather', 'temperature', 'updatedAt']
}
</script>