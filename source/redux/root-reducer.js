import { combineReducers } from 'redux';

import { homeReducer } from './home-item/home-item.reducer';

export default combineReducers({
    homeContent: homeReducer
})