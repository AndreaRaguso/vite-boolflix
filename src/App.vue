<script>

import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  created() {
    
  },
  methods: {
    searchResult() {
      axios
        .get("https://api.themoviedb.org/3/search/movie?api_key=eb01afe2b45b7303c28f1174082827ed",
          {
            params:
              { query: store.searchText }
          }
        )
        .then((response) => {
          store.filmResult = response.data.results
        });
    }
  }
}
</script>

<template>

  <AppHeader @searchResult="searchResult" />
  <AppMain />

</template>

<style lang="scss">
@import './styles/main.scss'
</style>
