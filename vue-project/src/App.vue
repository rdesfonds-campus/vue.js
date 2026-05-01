<template>
  <main>
    <h1>Météo</h1>

    <button @click="onListClick">Voir la liste des villes</button>
    <br>
    <router-link to="/villes">Aller à la liste des villes</router-link>
    <br>

    <router-link to="/ville">Voir ma ville</router-link>

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