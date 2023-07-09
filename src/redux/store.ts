// ========== Store
// import all modules
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';

const reduxStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  return {
    store,
  };
};

export default reduxStore();
