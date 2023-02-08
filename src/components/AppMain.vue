<script>

import { store } from '../store.js';

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
}
</script>

<template>

    <main>

        <div v-for="result in store.filmResult">

            <div>{{ result.title }}</div>
            <div>{{ result.original_title }}</div>
            <div>{{ result.original_language }}</div>
            <div>{{ result.vote_average }}</div>

        </div>

    </main>

</template>

<style lang="scss" scoped>

</style>