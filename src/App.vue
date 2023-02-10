<script>

import axios from 'axios';
import AppLogin from './components/AppLogin.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppLogin,
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {
      store
    }
  },
  methods: {
  },
  created() {

    for (let i = 0; i < store.homes.length; i++) {
        let link = 'https://api.themoviedb.org/3/' + store.homes[i].name + '?api_key=eb01afe2b45b7303c28f1174082827ed&language=it-IT&page=1'
        axios
          .get(link)
          .then((response) => {
            store.homes[i].array = response.data.results
          });
    }

  },
  computed: {

    searchResult() {
      axios
        .get("https://api.themoviedb.org/3/search/movie?api_key=eb01afe2b45b7303c28f1174082827ed",
          {
            params:
            {
              query: store.searchText,
              language: 'it-IT'
            }
          }
        )
        .then((response) => {
          store.moviesResult = response.data.results
          store.loadingResult = true
        });

        axios
        .get("https://api.themoviedb.org/3/search/tv?api_key=eb01afe2b45b7303c28f1174082827ed",
          {
            params:
            {
              query: store.searchText,
              language: 'it-IT'
            }
          }
        )
        .then((response) => {
          store.seriesResult = response.data.results
          store.loadingResult = true
        });
    },
  }
}
</script>

<template>


  <AppLogin v-if="store.loginOk == false" />

  <div v-else>
    <AppMain />
    <AppHeader @searchResult="searchResult" />
    <AppFooter />
  </div>


</template>

<style lang="scss">
@import './styles/main.scss'
</style>
