// ========== Root Reducer
// import all modules
import {combineReducers} from '@reduxjs/toolkit';
import likeReducer from './like';

const rootReducer = combineReducers({
  likeReducer: likeReducer,
});

export default rootReducer;
