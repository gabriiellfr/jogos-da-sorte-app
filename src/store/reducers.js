import { combineReducers } from 'redux';

import { authSlice, themeSlice } from './slices';

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    theme: themeSlice.reducer,
});

export default rootReducer;
