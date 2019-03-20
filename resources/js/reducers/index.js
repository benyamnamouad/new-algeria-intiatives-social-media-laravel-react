import { combineReducers } from 'redux';

import InitsReducer from './reducer_inits'



const rootReducer = combineReducers({
    inits: InitsReducer,

});

export default rootReducer;
