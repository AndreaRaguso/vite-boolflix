import { reactive } from 'vue';

export const store = reactive({
    searchText: '',
    starRate: 0,
    loadingResult: false,
    loginOk: false,
    unknowImage : 'https://www.pngitem.com/pimgs/m/236-2369728_unknown-person-hd-png-download.png',
    nameProfile: '',
    generesID: [],


    // Film e Serie Arrays per la Ricerca
    moviesResult: [],
    seriesResult: [],

    homes:[
        {
            name: 'tv/popular',
            array: [],
        },
        {
            name: 'tv/top_rated',
            array: [],
        },
        {
            name: 'movie/latest',
            array: [],
        },
        {
            name: 'movie/popular',
            array: [],
        },
        {
            name: 'movie/top_rated',
            array: [],
        },
        {
            name: 'movie/upcoming',
            array: [],
        },
    ]

});