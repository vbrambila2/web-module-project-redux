import { combineReducers } from 'redux';
import favReducer from './favoriteReducer';
import movieReducer from './movieReducer';

export default combineReducers({ movieReducer, favReducer });