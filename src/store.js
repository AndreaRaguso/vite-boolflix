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

    //Film Arrays per la Home
    moviesUncoming: [],
    moviesRated: [],
    moviesPopular: [],
    moviesLatest: [],

    //Serie Arrays per la Home
    seriesRated: [],
    seriesPopular: [],
    seriesLatest: [],

});