<template>
  <div v-if="charactersList.length" class="starships">
    <div v-for="(character, index) in charactersList" :key="index"  class="starships-list">
      <router-link :to="{name: 'people', params: {id: getIdFromUrl(character.url) }}">
        <h5>{{ character.name }}</h5>
      </router-link>
    </div>
    <button type="button" @click="moreCharacters" v-if="charactersList.length < 87" class="characters-button">SHOW MORE</button>
  </div>
  <div v-else>
    <h2>Accessing our character's databank, wait a second!</h2>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'CharactersListView',
    props: ['getIdFromUrl'],
    computed: {
      ...mapState(['charactersList']),
    },
    methods: {
      ...mapActions(['fetchMoreCharacters']),
      moreCharacters() {
        this.fetchMoreCharacters();
      },
    }
  }
</script>

<style scoped>
  h5 {
    padding: 1em !important;
  }
  .characters-button:hover {
    text-decoration-color: #419a5a;
  }
</style>