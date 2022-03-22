import movies from "./../data";

const initialDisplay = {
    favorites: movies,
    displayFavorites: false
}

const favReducer = (state = initialDisplay, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default favReducer;