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
        flagMovie() {
            for (let i = 0; i <= store.moviesResult.length; i++) {
                for(let index = 0; index < store.flags.length; index++){
                    if(store.flags[index].lingua == store.moviesResult[i].original_language ){
                        return store.flags[index].bandiera
                    }
                }
            }
        },
        flagSeries() {
            for (let i = 0; i <= store.seriesResult.length; i++) {
                for(let index = 0; index < store.flags.length; index++){
                    if(store.flags[index].lingua == store.seriesResult[i].original_language ){
                        return store.flags[index].bandiera
                    }
                }
            }
        }
    }
}
</script>

<template>

    <main>

        <div v-for="movie in store.moviesResult">

            <div>{{ movie.title }}</div>
            <div>{{ movie.original_title }}</div>
            <img :src="flagMovie()" alt=""> {{ movie.original_language }}
            <div>{{ movie.vote_average }}</div>

        </div>

        <div v-for="serie in store.seriesResult">

            <div>{{ serie.name }}</div>
            <div>{{ serie.original_name }}</div>
            <img :src="flagSeries()" alt=""> {{ serie.original_language }}
            <div>{{ serie.vote_average }}</div>

        </div>

    </main>

</template>

<style lang="scss" scoped>

</style>