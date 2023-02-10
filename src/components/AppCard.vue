<script>

import { store } from '../store.js';

export default {
    name: 'AppCard',
    data() {
        return {
            store
        }
    },
    props: {
        card: Object
    },
    computed: {

        getFlag(){
            let lang = this.card.original_language;
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
            store.starRate = this.card.vote_average / 2
            store.starRate = Math.ceil(store.starRate);
            if (store.starRate == 0) {
                return store.starRate = 1
            }
            return store.starRate
        },

    }
}
</script>

<template>
    <div class="item">
        <div class="item-poster w-100">
            <img v-if="card.poster_path == null" :src="store.unknowImage" alt="unknow image">
            <img v-else :src="'https://image.tmdb.org/t/p/w342' + card.poster_path" alt="">
        </div>
        <div class="info-item w-100 font-card">
            <div class="d-flex align-items-center w-100 mb-3">
                <i class="fa-solid fa-circle-play fs-2 me-2"></i>
                <i class="fa-solid fa-circle-plus fs-2 me-2"></i>
                <i class="fa-regular fa-circle-check fs-2 me-2"></i>
                <i class="fa-solid fa-circle-chevron-down fs-2 ms-auto text-end"></i>
            </div>
            <div class="mb-2 fonts-card">{{ card.title || card.name }}</div>
            <!-- <div v-if="card.title != card.original_title">{{ card.original_title }}</div> -->
            <div class="mb-3">
                <span class="fonts-card me-2">Lingua Originale </span>
                <img class="flag-card" :src="getFlag" alt="">
            </div>
            <div class="d-flex w-100">
                <span class="me-2">Valutazione</span>
                <div v-for="x in getStar">
                    <i class="fa-solid fa-star yellow-star"></i>
                </div>
                <div class="white-star" v-for="y in (5 - getStar)">
                    <i class="fa-solid fa-star white-star"></i>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>