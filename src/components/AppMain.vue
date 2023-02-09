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
                case 'hi':
                    lang = 'in';
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
        },

    }
}
</script>

<template>

    <main>

        <!-- Result container -->
        <section class="main-container" v-if="store.loadingResult == true, store.searchText != ''">

            <div class="location" id="home" v-show="store.moviesResult != ''">
                <strong class="box-title" id="home">Film</strong>
                <div class="box-search">
                    <div class="item" v-for="movie in store.moviesResult">
                        <div class="item-poster w-100">
                            <img v-if="movie.poster_path == null" :src="store.unknowImage" alt="unknow image">
                            <img v-else :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path" alt="">
                        </div>
                        <div class="info-item w-100 font-card">
                            <div class="d-flex align-items-center w-100 mb-3">
                                <i class="fa-solid fa-circle-play fs-2 me-2"></i>
                                <i class="fa-solid fa-circle-plus fs-2 me-2"></i>
                                <i class="fa-regular fa-circle-check fs-2 me-2"></i>
                                <i class="fa-solid fa-circle-chevron-down fs-2 ms-auto text-end"></i>
                            </div>
                            <div class="mb-2 fonts-card">{{ movie.title }}</div>
                            <!-- <div v-if="movie.title != movie.original_title">{{ movie.original_title }}</div> -->
                            <div class="mb-3">
                                <span class="fonts-card me-2">Lingua Originale </span>
                                <img class="flag-card" :src="getFlag(movie.original_language)" alt="">
                            </div>
                            <div class="d-flex w-100">
                                <span class="me-2">Valutazione</span>
                                <div v-for="x in getStar(store.starRate = movie.vote_average / 2)">
                                    <i class="fa-solid fa-star yellow-star"></i>
                                </div>
                                <div class="white-star" v-show="store.starRate < 5" v-for="y in rating()">
                                    <i class="fa-solid fa-star white-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div v-show="store.seriesResult != ''">
                <strong class="box-title" id="myList">Serie TV</strong>
                <div class="box-search">
                    <div class="item" v-for="serie in store.seriesResult">
                        <div class="item-poster w-100">
                            <img v-if="serie.poster_path == null" :src="store.unknowImage" alt="unknow image">
                            <img v-else :src="'https://image.tmdb.org/t/p/w342' + serie.poster_path" alt="">
                        </div>
                        <div class="info-item w-100 font-card">
                            <div class="d-flex align-items-center w-100 mb-3">
                                <i class="fa-solid fa-circle-play fs-2 me-2"></i>
                                <i class="fa-solid fa-circle-plus fs-2 me-2"></i>
                                <i class="fa-regular fa-circle-check fs-2 me-2"></i>
                                <i class="fa-solid fa-circle-chevron-down fs-2 ms-auto text-end"></i>
                            </div>
                            <div class="mb-2 fonts-card">{{ serie.name }}</div>
                            <!-- <div v-if="serie.title != serie.original_name">{{ serie.original_name }}</div> -->
                            <div class="mb-3">
                                <span class="fonts-card me-2">Lingua Originale </span>
                                <img class="flag-card" :src="getFlag(serie.original_language)" alt="">
                            </div>
                            <div class="d-flex w-100">
                                <span class="me-2">Valutazione</span>
                                <div v-for="x in getStar(store.starRate = serie.vote_average / 2)">
                                    <i class="fa-solid fa-star yellow-star"></i>
                                </div>
                                <div class="white-star" v-show="store.starRate < 5" v-for="y in rating()">
                                    <i class="fa-solid fa-star white-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
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
                    <div class="item" v-for="movie in store.moviesPopular">
                        <div class="item-poster w-100">
                            <img v-if="movie.poster_path == null" :src="store.unknowImage" alt="unknow image">
                            <img v-else :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path" alt="">
                        </div>
                        <div class="info-item w-100 font-card">
                            <div class="d-flex align-items-center w-100 mb-3">
                                <i class="fa-solid fa-circle-play fs-2 me-2"></i>
                                <i class="fa-solid fa-circle-plus fs-2 me-2"></i>
                                <i class="fa-regular fa-circle-check fs-2 me-2"></i>
                                <i class="fa-solid fa-circle-chevron-down fs-2 ms-auto text-end"></i>
                            </div>
                            <div class="mb-2 fonts-card">{{ movie.title }}</div>
                            <!-- <div v-if="movie.title != movie.original_title">{{ movie.original_title }}</div> -->
                            <div class="mb-3">
                                <span class="fonts-card me-2">Lingua Originale </span>
                                <img class="flag-card" :src="getFlag(movie.original_language)" alt="">
                            </div>
                            <div class="d-flex w-100">
                                <span class="me-2">Valutazione</span>
                                <div v-for="x in getStar(store.starRate = movie.vote_average / 2)">
                                    <i class="fa-solid fa-star yellow-star"></i>
                                </div>
                                <div class="white-star" v-show="store.starRate < 5" v-for="y in rating()">
                                    <i class="fa-solid fa-star white-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <strong class="box-title" id="myList">Serie TV più Popolari</strong>
            <div class="box scroll">
                <div class="item" v-for="serie in store.seriesPopular">
                    <div class="item-poster w-100">
                        <img v-if="serie.poster_path == null" :src="store.unknowImage" alt="unknow image">
                        <img v-else :src="'https://image.tmdb.org/t/p/w342' + serie.poster_path" alt="">
                    </div>
                    <div class="info-item w-100 font-card">
                        <div class="d-flex align-items-center w-100 mb-3">
                            <i class="fa-solid fa-circle-play fs-2 me-2"></i>
                            <i class="fa-solid fa-circle-plus fs-2 me-2"></i>
                            <i class="fa-regular fa-circle-check fs-2 me-2"></i>
                            <i class="fa-solid fa-circle-chevron-down fs-2 ms-auto text-end"></i>
                        </div>
                        <div class="mb-2 fonts-card">{{ serie.name }}</div>
                        <!-- <div v-if="serie.title != serie.original_name">{{ serie.original_name }}</div> -->
                        <div class="mb-3">
                            <span class="fonts-card me-2">Lingua Originale </span>
                            <img class="flag-card" :src="getFlag(serie.original_language)" alt="">
                        </div>
                        <div class="d-flex w-100">
                            <span class="me-2">Valutazione</span>
                            <div v-for="x in getStar(store.starRate = serie.vote_average / 2)">
                                <i class="fa-solid fa-star yellow-star"></i>
                            </div>
                            <div class="white-star" v-show="store.starRate < 5" v-for="y in rating()">
                                <i class="fa-solid fa-star white-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <strong class="box-title" id="home">Film in arrivo</strong>
            <div class="box scroll">
                <div class="item" v-for="movie in store.moviesUncoming">
                    <div class="item-poster w-100">
                        <img v-if="movie.poster_path == null" :src="store.unknowImage" alt="unknow image">
                        <img v-else :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path" alt="">
                    </div>
                    <div class="info-item w-100 font-card">
                        <div class="d-flex align-items-center w-100 mb-3">
                            <i class="fa-solid fa-circle-play fs-2 me-2"></i>
                            <i class="fa-solid fa-circle-plus fs-2 me-2"></i>
                            <i class="fa-regular fa-circle-check fs-2 me-2"></i>
                            <i class="fa-solid fa-circle-chevron-down fs-2 ms-auto text-end"></i>
                        </div>
                        <div class="mb-2 fonts-card">{{ movie.title }}</div>
                        <!-- <div v-if="movie.title != movie.original_title">{{ movie.original_title }}</div> -->
                        <div class="mb-3">
                            <span class="fonts-card me-2">Lingua Originale </span>
                            <img class="flag-card" :src="getFlag(movie.original_language)" alt="">
                        </div>
                        <div class="d-flex w-100">
                            <span class="me-2">Valutazione</span>
                            <div v-for="x in getStar(store.starRate = movie.vote_average / 2)">
                                <i class="fa-solid fa-star yellow-star"></i>
                            </div>
                            <div class="white-star" v-show="store.starRate < 5" v-for="y in rating()">
                                <i class="fa-solid fa-star white-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <strong class="box-title" id="myList">Serie TV più Apprezzate</strong>
            <div class="box scroll">
                <div class="item" v-for="serie in store.seriesRated">
                    <div class="item-poster w-100">
                        <img v-if="serie.poster_path == null" :src="store.unknowImage" alt="unknow image">
                        <img v-else :src="'https://image.tmdb.org/t/p/w342' + serie.poster_path" alt="">
                    </div>
                    <div class="info-item w-100 font-card">
                        <div class="d-flex align-items-center w-100 mb-3">
                            <i class="fa-solid fa-circle-play fs-2 me-2"></i>
                            <i class="fa-solid fa-circle-plus fs-2 me-2"></i>
                            <i class="fa-regular fa-circle-check fs-2 me-2"></i>
                            <i class="fa-solid fa-circle-chevron-down fs-2 ms-auto text-end"></i>
                        </div>
                        <div class="mb-2 fonts-card">{{ serie.name }}</div>
                        <!-- <div v-if="serie.name != serie.original_name">{{ serie.original_name }}</div> -->
                        <div class="mb-3">
                            <span class="fonts-card me-2">Lingua Originale </span>
                            <img class="flag-card" :src="getFlag(serie.original_language)" alt="">
                        </div>
                        <div class="d-flex w-100">
                            <span class="me-2">Valutazione</span>
                            <div v-for="x in getStar(store.starRate = serie.vote_average / 2)">
                                <i class="fa-solid fa-star yellow-star"></i>
                            </div>
                            <div class="white-star" v-show="store.starRate < 5" v-for="y in rating()">
                                <i class="fa-solid fa-star white-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <strong class="box-title" id="home">Film più Amati</strong>
            <div class="box scroll">
                <div class="item" v-for="movie in store.moviesRated">
                    <div class="item-poster w-100">
                        <img v-if="movie.poster_path == null" :src="store.unknowImage" alt="unknow image">
                        <img v-else :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path" alt="">
                    </div>
                    <div class="info-item w-100 font-card">
                        <div class="d-flex align-items-center w-100 mb-3">
                            <i class="fa-solid fa-circle-play fs-2 me-2"></i>
                            <i class="fa-solid fa-circle-plus fs-2 me-2"></i>
                            <i class="fa-regular fa-circle-check fs-2 me-2"></i>
                            <i class="fa-solid fa-circle-chevron-down fs-2 ms-auto text-end"></i>
                        </div>
                        <div class="mb-2 fonts-card">{{ movie.title }}</div>
                        <!-- <div v-if="movie.title != movie.original_title">{{ movie.original_title }}</div> -->
                        <div class="mb-3">
                            <span class="fonts-card me-2">Lingua Originale </span>
                            <img class="flag-card" :src="getFlag(movie.original_language)" alt="">
                        </div>
                        <div class="d-flex w-100">
                            <span class="me-2">Valutazione</span>
                            <div v-for="x in getStar(store.starRate = movie.vote_average / 2)">
                                <i class="fa-solid fa-star yellow-star"></i>
                            </div>
                            <div class="white-star" v-show="store.starRate < 5" v-for="y in rating()">
                                <i class="fa-solid fa-star white-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </main>

</template>

<style lang="scss" scoped>

</style>