<template>
  <main>
    <h1>Météo</h1>

    <button @click="onListClick">Voir la liste des villes</button>

    <router-link to="/villes">Aller à la liste des villes</router-link>

    <router-view />
  </main>
</template>

<script>
export default {
  name: 'App',
  methods: {
    onListClick() {
      alert('Tu as cliqué sur la liste des villes')
    }
  }
}
</script>