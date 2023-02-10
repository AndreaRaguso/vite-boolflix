<script>

import AppCard from '../components/AppCard.vue';
import { store } from '../store.js';

export default {
    name: 'AppMain',
    components: {
        AppCard
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>

    <main>

        <!-- Result container -->
        <section class="main-container" v-if="store.loadingResult == true, store.searchText != ''">

            <div class="location" id="home" v-show="store.moviesResult != ''">
                <strong class="box-title" id="home">Film</strong>
                <div class="box-search">
                    <AppCard v-for="movie in store.moviesResult" :card="movie" />
                </div>
            </div>

            <div v-show="store.seriesResult != ''">
                <strong class="box-title" id="myList">Serie TV</strong>
                <div class="box-search">
                    <AppCard v-for="serie in store.seriesResult" :card="serie"/>
                </div>
            </div>

            <div class="fs-1 py-5 text-center" v-show="store.moviesResult == '' && store.seriesResult == ''">
                Nessun Risultato per : {{ store.searchText }}
            </div>

        </section>

        <!-- Home Container -->
        <section class="main-container" v-else>

            <div class="location" id="home">
                <strong class="box-title" id="home">Film più Popolari</strong>
                <div class="box scroll">
                    <AppCard v-for="movie in store.homes[3].array" :card="movie"/>
                </div>
            </div>

            <strong class="box-title" id="myList">Serie TV più Popolari</strong>
            <div class="box scroll">
                <AppCard v-for="serie in store.homes[0].array" :card="serie"/>
            </div>

            <strong class="box-title" id="home">Film in arrivo</strong>
            <div class="box scroll">
                <AppCard v-for="movie in store.homes[5].array" :card="movie"/>
            </div>

            <strong class="box-title" id="myList">Serie TV più Apprezzate</strong>
            <div class="box scroll">
                <AppCard v-for="serie in store.homes[1].array" :card="serie"/>
            </div>

            <strong class="box-title" id="home">Film più Amati</strong>
            <div class="box scroll">
                <AppCard v-for="movie in store.homes[4].array" :card="movie" />
            </div>

        </section> 

    </main>

</template>

<style lang="scss" scoped>

</style>