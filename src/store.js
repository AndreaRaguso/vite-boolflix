import { reactive } from 'vue';

export const store = reactive({
    searchText: '',
    moviesResult: [],
    seriesResult: [],






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

    ]
});