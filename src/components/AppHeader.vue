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

    <header>

        <div class="d-flex  justify-content-center py-5">
            <input type="text" placeholder="Jane Doe" v-model="store.searchText">
            <button type="submit" class="btn btn-primary" @click="$emit('searchResult')">Submit</button>
        </div>

    </header>

</template>

<style lang="scss" scoped>

</style>