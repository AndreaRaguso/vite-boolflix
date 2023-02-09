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
        getFlag(lang) {

            switch (lang) {
                case 'en':
                    lang = 'uk';
                    break;
                case 'pt':
                    lang = 'po';
                    break;
                case 'es':
                    lang = 'sp';
                    break;
            }

            const flag = 'https://www.worldometers.info//img/flags/small/tn_' + lang + '-flag.gif';

            return flag;
        },
        getStar() {
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

            <div class="location" id="home" v-show="store.moviesResult != ''">
                <strong class="box-title" id="home">Film</strong>
                <div class="box">
                    <div class="item" v-for="movie, index in store.moviesResult">
                        <div class="item-poster w-100">
                            <img v-if="movie.poster_path == null" :src="store.unknowImage" alt="unknow image">
                            <img v-else :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path" alt="">
                        </div>
                        <div class="info-item">
                            <div>{{ movie.title }}</div>
                            <div v-if="movie.title != movie.original_title">{{ movie.original_title }}</div>
                            <div class="h-75 w-75">
                                <img class="h-25 w-25" :src="getFlag(movie.original_language)" alt="">
                            </div>
                            <div class="d-flex w-100">
                                <img v-for="x in getStar(store.starRate = movie.vote_average / 2)"
                                    src="https://img.icons8.com/color/20/null/filled-star--v1.png" />
                                <img class="white-star" v-show="store.starRate < 5" v-for="y in rating()"
                                    src="https://img.icons8.com/ios-filled/18/FFFFFF/filled-star.png" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div v-show="store.seriesResult != ''">
                <strong class="box-title" id="myList">Serie TV</strong>
                <div class="box">
                    <div class="item" v-for="serie, i in store.seriesResult">
                        <div class="item-poster">
                            <img v-if="serie.poster_path == null" :src="store.unknowImage" alt="unknow image">
                            <img v-else :src="'https://image.tmdb.org/t/p/w342' + serie.poster_path" alt="">
                        </div>
                        <div class="info-item">
                            <div>{{ serie.name }}</div>
                            <div v-if="serie.name != serie.original_name">{{ serie.original_name }}</div>
                            <div class="w-75 h-75">
                                <img class="w-25 h-25" :src="getFlag(serie.original_language)" alt="">
                            </div>
                            <div class="d-flex">
                                <img v-for="x in getStar(store.starRate = serie.vote_average / 2)"
                                    src="https://img.icons8.com/color/20/null/filled-star--v1.png" />
                                <img v-show="store.starRate < 5" v-for="y in rating()"
                                    src="https://img.icons8.com/ios-filled/18/FFFFFF/filled-star.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fs-1 py-5 text-center" v-show="store.moviesResult==''&&store.seriesResult==''" >
                Nessun Risultato per : {{ store.searchText }}
            </div>

        </section>

    </main>

</template>

<style lang="scss" scoped>

</style>