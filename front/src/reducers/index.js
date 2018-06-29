import { combineReducers } from 'redux';

import datasReducer from './fetchReducer';
import showIconsReducer from './showIcons';
import reducerDetailsAttractions from './reducerDetailsAttractions';

const rootReducer = combineReducers({
    datasReducer,
    showIconsReducer,
    whichOne : reducerDetailsAttractions
});

export default rootReducer;
