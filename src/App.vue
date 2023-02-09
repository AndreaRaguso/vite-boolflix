<script>

import axios from 'axios';
import AppLogin from './components/AppLogin.vue';
import AppHeader from './components/AppHeader.vue';
import AppHome from './components/AppHome.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppLogin,
    AppHeader,
    AppMain,
    AppHome,
    AppFooter
  },
  data() {
    return {
      store
    }
  },
  created() {

    // Serie Latest
    axios
      .get("https://api.themoviedb.org/3/tv/latest?api_key=eb01afe2b45b7303c28f1174082827ed&language=it-IT")
      .then((response) => {
        store.seriesLatest = response.data.results
      });

    // Serie Popular
    axios
      .get("https://api.themoviedb.org/3/tv/popular?api_key=eb01afe2b45b7303c28f1174082827ed&language=it-IT")
      .then((response) => {
        store.seriesPopular = response.data.results
      });
    // Serie Top Rated
    axios
      .get("https://api.themoviedb.org/3/tv/top_rated?api_key=eb01afe2b45b7303c28f1174082827ed&language=it-IT")
      .then((response) => {
        store.seriesRated = response.data.results
      });
    // Movie Latest
    axios
      .get("https://api.themoviedb.org/3/movie/latest?api_key=eb01afe2b45b7303c28f1174082827ed&language=it-IT")
      .then((response) => {
        store.moviesLatest = response.data.results
      });
    // Movie Popular
    axios
      .get("https://api.themoviedb.org/3/movie/popular?api_key=eb01afe2b45b7303c28f1174082827ed&language=it-IT&page=1")
      .then((response) => {
        store.moviesPopular = response.data.results
      });
    // Movie Rated
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated?api_key=eb01afe2b45b7303c28f1174082827ed&language=it-IT&page=1")
      .then((response) => {
        store.moviesRated = response.data.results
      });
    // Movie Uncoming
    axios
      .get("https://api.themoviedb.org/3/movie/upcoming?api_key=eb01afe2b45b7303c28f1174082827ed&language=it-IT&page=1")
      .then((response) => {
        store.moviesUncoming = response.data.results
      });

  },
  computed: {

    searchMovies() {
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
    },

    searchSeries() {
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

  
<AppLogin v-if="store.loginOk == false"/>

<div v-else>
  <AppMain/>
  <AppHeader  @searchResult="searchMovies, searchSeries" />
  <AppFooter />
</div>


</template>

<style lang="scss">
@import './styles/main.scss'
</style>
