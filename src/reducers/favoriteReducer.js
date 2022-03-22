import movies from "./../data";
import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions";

const initialDisplay = {
    favorites: movies,
    displayFavorites: false
}

const favReducer = (state = initialDisplay, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return !state.displayFavorites
        case ADD_FAVORITE:
            return [ ...state, action.payload ]
        case REMOVE_FAVORITE:
            return state.map(fav => {
                action.payload === fav.id
                ? { ...fav, displayFavorites: !fav.displayFavorites }
                : fav
            })
        default:
            return state
    }
}

export default favReducer;