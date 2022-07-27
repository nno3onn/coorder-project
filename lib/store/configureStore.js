import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from './modules';

const isProduction = process.env.NODE_ENV !== 'production';

const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: !isProduction,
    enhancers: [composeWithDevTools(applyMiddleware(thunk))],
  });
  return store;
};

const wrapper = createWrapper(makeStore, { debug: !isProduction });

export default wrapper;
