import React from "react";
import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
}



const rootReducer = (state = initialState, action) => {
    let lista;
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.allCharacters],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((character) => (character.id !== action.payload))
            }
        case FILTER:
            lista = [...state.allCharacters];
            lista.filter((character) => character.gender === action.payload);
            return {
                ...state,
                myFavorites: lista
            }
        case ORDER:
            lista = [...state.allCharacters.sort((x, y) => x.id - y.id)];
            if (action.payload === "Ascendente") {
                return {
                    ...state,
                    myFavorites: lista
                }
            }
            return {
                ...state,
                myFavorites: lista.reverse()
            }

        default: return {...state }
    }
}

export default rootReducer;