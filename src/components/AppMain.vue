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

        <div v-for="movie, index in store.moviesResult">
            <img :src="'https://image.tmdb.org/t/p/w154' + movie.poster_path" alt="">
            <div>{{ movie.title }}</div>
            <div>{{ movie.original_title }}</div>
            <img :src="flagMovie(index)" alt="">
            <div>
                <img v-for="x in starMovie(index)" src="https://img.icons8.com/color/38/null/filled-star--v1.png" />
                <img v-show="store.starRate < 5" v-for="y in rating()" src="https://img.icons8.com/ios/30/null/star--v1.png" />
            </div>
        </div>

        <div v-for="serie, i in store.seriesResult">
            <img :src="'https://image.tmdb.org/t/p/w154' + serie.poster_path" alt="">
            <div>{{ serie.name }}</div>
            <div>{{ serie.original_name }}</div>
            <img :src="flagSerie(i)" alt="">
            <div>
                <img v-for="x in starSerie(i)" src="https://img.icons8.com/color/48/null/filled-star--v1.png" />
                <img v-show="store.starRate < 5" v-for="y in rating()" src="https://img.icons8.com/ios/40/null/star--v1.png" />
            </div>
        </div>

    </main>

</template>

<style lang="scss" scoped>

</style>