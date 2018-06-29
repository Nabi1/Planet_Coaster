import { combineReducers } from 'redux';

import datasReducer from './fetchReducer';
import showIconsReducer from './showIcons';

const rootReducer = combineReducers({
  datasReducer,
  showIconsReducer,
});

export default rootReducer;
