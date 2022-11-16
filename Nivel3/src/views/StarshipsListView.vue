<template>
  <div v-if="starshipsList.length" class="starships">
    <div v-for="(starship, index) in starshipsList" :key="index"  class="starships-list">
      <router-link :to="{name: 'starship', params: {id: getIdFromUrl(starship.url) }}">
        <h5>{{ starship.name }}</h5>
        <p>{{ starship.model }}</p>
      </router-link>
    </div>
    <button type="button" @click="moreStarships" v-if="starshipsList.length < 37" class="starships-button">SHOW MORE</button>
  </div>
  <div v-else>
    <h2>Accessing our starship's dock, wait a second!</h2>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'StarshipsListView',
    props: ['getIdFromUrl'],
    computed: {
      ...mapState(['starshipsList', 'page']),
    },
    methods: {
      ...mapActions(['fetchStarships', 'fetchMoreStarships']),
      moreStarships() {
        this.fetchMoreStarships();
      },
    }
  }
</script>

<style>
  .starships-button:hover {
    text-decoration-color: #9e4f60;;
  }
</style>