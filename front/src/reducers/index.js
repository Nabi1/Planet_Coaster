import { combineReducers } from 'redux';

import datasReducer from './fetchReducer';
import reducerDetailsAttractions from './reducerDetailsAttractions';

const rootReducer = combineReducers({
    datasReducer,
    whichOne : reducerDetailsAttractions
});

export default rootReducer;