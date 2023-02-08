import { reactive } from 'vue';

export const store = reactive({
    searchText: '',
    moviesResult: [],
    seriesResult: [],
    starRate: 0,
    loadingResult: false,






    flags: [
        {
            lingua: 'en',
            bandiera: "https://img.icons8.com/color/48/null/great-britain.png",
        },
        {
            lingua: 'es',
            bandiera: "https://img.icons8.com/color/48/null/spain-2.png",
        },
        {
            lingua: 'it',
            bandiera: "https://img.icons8.com/color/48/null/italy.png",
        },
        {
            lingua: 'de',
            bandiera: "https://img.icons8.com/color/48/null/belgium.png",
        },
        {
            lingua: 'ko',
            bandiera: "https://img.icons8.com/color/48/null/south-korea-circular.png",
        },
        {
            lingua: 'fr',
            bandiera: "https://img.icons8.com/color/48/null/france.png",
        },
        {
            lingua: 'ja',
            bandiera: "https://img.icons8.com/color/48/null/japan.png",
        },

    ]
});