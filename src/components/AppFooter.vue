<script>

import { store } from '../store.js';

export default {
    name: 'AppFooter',
    data() {
        return {
            store
        }
    },
}
</script>

<template>

    <!-- LINKS -->
    <section class="link w-50 mx-auto">
        <div class="logos d-flex mb-3">
            <a href="#"><i class="fab fa-facebook-square fa-2x logo"></i></a>
            <a href="#"><i class="fab fa-instagram fa-2x logo"></i></a>
            <a href="#"><i class="fab fa-twitter fa-2x logo"></i></a>
            <a href="#"><i class="fab fa-youtube fa-2x logo"></i></a>
        </div>
        <div class="sub-links">
            <ul>
                <li><a href="#">Audio and Subtitles</a></li>
                <li><a href="#">Audio Description</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Gift Cards</a></li>
                <li><a href="#">Media Center</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Legal Notices</a></li>
                <li><a href="#">Corporate Information</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <footer class="mx-auto mt-5">
            <p>&copy 1997-2018 Netflix, Inc.</p>
            <p>Carlos Avila &copy 2018</p>
        </footer>
    </section>
    <!-- END OF LINKS -->

    <!-- FOOTER -->

</template>

<style lang="scss" scoped>

</style>