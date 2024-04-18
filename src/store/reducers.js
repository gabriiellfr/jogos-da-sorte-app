// src/store/reducers.js
import { combineReducers } from 'redux';

import { themeSlice } from './slices';

const rootReducer = combineReducers({
    theme: themeSlice.reducer,
});

export default rootReducer;
