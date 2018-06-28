import { combineReducers } from 'redux';

import datasReducer from './fetchReducer';

const rootReducer = combineReducers({
    datasReducer: datasReducer
});

export default rootReducer;
