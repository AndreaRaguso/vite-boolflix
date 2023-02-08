<script>

import { store } from '../store.js';

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    methods: {
        flagMovie(i) {
            for (let index = 0; index < store.flags.length; index++) {
                if (store.flags[index].lingua == store.moviesResult[i].original_language) {
                    return store.flags[index].bandiera
                }
            }
        },
        flagSerie(i) {
            for (let index = 0; index < store.flags.length; index++) {
                if (store.flags[index].lingua == store.seriesResult[i].original_language) {
                    return store.flags[index].bandiera
                }
            }
        },
        starMovie(index) {
            store.starRate = store.moviesResult[index].vote_average / 2;
            store.starRate = Math.ceil(store.starRate);
            if (store.starRate == 0) {
                return store.starRate = 1
            }
            return store.starRate
        },
        starSerie(i) {
            store.starRate = store.seriesResult[i].vote_average / 2;
            store.starRate = Math.ceil(store.starRate);
            if (store.starRate == 0) {
                return store.starRate = 1
            }
            return store.starRate
        },
        rating() {
            let x = 5 - store.starRate;
            return x
        }
    }
}
</script>

<template>

    <main>

        <section class="main-container">

            <div class="location" id="home">
                <strong v-show="store.loadingResult == true" class="box-title" id="home">Film</strong>
                <div class="box">

                    <div class="item" v-for="movie, index in store.moviesResult">
                        <div class="item-poster w-100">
                            <img :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path" alt="">
                        </div>
                        <div class="info-item">
                            <div>{{ movie.title }}</div>
                            <div>{{ movie.original_title }}</div>
                            <img class="h-50" :src="flagMovie(index)" alt="">
                            <div class="d-flex w-100">
                                <img v-for="x in starMovie(index)" src="https://img.icons8.com/color/20/null/filled-star--v1.png" />
                                <img class="white-star" v-show="store.starRate < 5" v-for="y in rating()" src="https://img.icons8.com/ios-filled/18/FFFFFF/filled-star.png" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <strong v-show="store.loadingResult == true" class="box-title" id="myList">Serie TV</strong>
            <div class="box">
                <div class="item" v-for="serie, i in store.seriesResult">
                    <div class="item-poster">
                        <img :src="'https://image.tmdb.org/t/p/w342' + serie.poster_path" alt="">
                    </div>
                    <div class="info-item">
                        <div>{{ serie.name }}</div>
                        <div>{{ serie.original_name }}</div>
                        <img :src="flagSerie(i)" alt="">
                        <div class="d-flex">
                            <img v-for="x in starSerie(i)" src="https://img.icons8.com/color/20/null/filled-star--v1.png" />
                            <img v-show="store.starRate < 5" v-for="y in rating()" src="https://img.icons8.com/ios-filled/18/FFFFFF/filled-star.png" />
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </main>

</template>

<style lang="scss" scoped>

</style>