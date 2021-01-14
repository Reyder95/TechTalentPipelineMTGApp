import axios from 'axios';

import { GOT_RANDOM_CARD, GOT_SEARCHED_CARDS } from './actionTypes';

const initialState = {
    randomCard: [],
    cardList: []
}

const gotRandomCard = (data) => {
    return {
        type: GOT_RANDOM_CARD,
        data
    }
}

const gotSearchedCards = (data) => {
    return {
        type: GOT_SEARCHED_CARDS,
        data
    }
}

export const getRandomCard = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://api.scryfall.com/cards/random/')
            console.log(response);
            dispatch(gotRandomCard(response.data));
        }
        catch (error) {
            console.error(error);
        }
    }
}

export const getSearchedCards = (searchString) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://api.scryfall.com/cards/search?q=${searchString}`)
            console.log(response);
            dispatch(gotSearchedCards(response.data.data));
        }
        catch (error) {
            console.error(error);
        }
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GOT_RANDOM_CARD:
            return {...state, randomCard: action.data};
        case GOT_SEARCHED_CARDS:
            return {...state, cardList: action.data}
        default:
            return state;
    }
}

export default rootReducer;