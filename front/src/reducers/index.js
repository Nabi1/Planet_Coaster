import { combineReducers } from 'redux';

import datasReducer from './fetchReducer';

const rootReducer = combineReducers({
    datasReducer
});

export default rootReducer;