<script>

import { store } from '../store.js';

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<template>

    <header class="d-flex align-items-center py-3 fs-5">

        <div class="netflixLogo">
            <a id="logo" href="#home"><img
                    src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true"
                    alt="Logo Image"></a>
        </div>
        <nav class="main-nav">
            <a href="#home">Home</a>
            <a href="#tvShows">Serie TV</a>
            <a href="#movies">Film</a>
            <a href="#originals">Nuovi e popolari</a>
            <a href="#">La mia lista</a>
            <a href="#">Sfoglia per lingua</a>
        </nav>

        <nav class="d-flex sub-nav  ms-auto  pe-5">
            <div class="position-relative mx-3">
                <input class="search-input" type="text" placeholder="Cerca un Titolo..." v-model="store.searchText" v-on:keyup.enter="$emit('searchResult')">
                <button type="submit" class="search-button" @click="$emit('searchResult')">
                    <i class="fas fa-search fs-4"></i>
                </button>
            </div>
            <a href="#" class="mx-3">Bambini</a>
            <a href="#" class="mx-3"><i class="fas fa-bell sub-nav-logo fs-4"></i></a>
            <a href="#" class="mx-3">Account</a>
        </nav>

    </header>

</template>

<style lang="scss" scoped>

</style>