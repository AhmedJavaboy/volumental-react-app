// Set up your root reducer here...
 import { combineReducers } from 'redux';

import modelColorReducer from './modelColorReducer';
import {routerReducer} from 'react-router-redux';


const rootReducer = combineReducers({
  modelColorReducer,
  routing: routerReducer,
});

export default rootReducer;
