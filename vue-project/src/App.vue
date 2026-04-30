<template>
  <div id="app">
    <h1 :class="{ red: isRed }">{{ title }}</h1>
    <h2 :class="{ red: isRed }">Sous-titre</h2>

    <input v-model="draftTitle" type="text" />
    <button @click="updateTitle">Mettre à jour le titre</button>

    <label>
      <input v-model="isRed" type="checkbox" />
      Mettre les titres en rouge
    </label>

    <br />

    <label>
      <input v-model="showImage" type="checkbox" />
      Afficher l'image
    </label>

    <img
      v-if="showImage"
      src="https://vuejs.org/images/logo.png"
      alt="Logo Vue"
      width="120"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Bonjour Vue',
      draftTitle: '',
      isRed: false,
      showImage: true
    }
  },
  methods: {
    updateTitle() {
      this.title = this.draftTitle
    }
  }
}
</script>

<style>
.red {
  color: red;
}
</style>