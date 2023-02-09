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

        <div class="netflixLogo" @click="store.loadingResult = false, store.searchText = ''">
            <a id="logo" href="#home"><img
                    src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true"
                    alt="Logo Image"></a>
        </div>
        <nav class="main-nav">
            <a href="#home" @click="store.loadingResult = false, store.searchText = '' " >Home</a>
            <a href="#tvShows">Serie TV</a>
            <a href="#movies">Film</a>
            <a href="#originals">Nuovi e popolari</a>
            <a href="#">La mia lista</a>
            <a href="#">Sfoglia per lingua</a>
        </nav>

        <nav class="d-flex align-items-center sub-nav  ms-auto  pe-5">
            <div class="position-relative mx-3">
                <button type="submit" class="search-button" @click="$emit('searchResult')">
                    <i class="fas fa-search fs-4"></i>
                </button>
                <input class="search-input" type="text" placeholder="Cerca un Titolo..." v-model="store.searchText" v-on:keyup="$emit('searchResult')">
                <i class="fa-solid fa-xmark cross-search" v-if="store.searchText != ''" @click="store.searchText = ''"></i>
            </div>
            <a href="#" class="mx-3">Bambini</a>
            <a href="#" class="mx-3"><i class="fas fa-bell sub-nav-logo fs-4"></i></a>
            <img class="image-profile" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="">
            <a href="#" class="mx-3" v-if="store.nameProfile == ''">Unknow</a>
            <a href="#" class="mx-3" v-else>{{ store.nameProfile }}</a>
        </nav>

    </header>

</template>

<style lang="scss" scoped>

</style>