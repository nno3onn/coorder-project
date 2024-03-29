import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from './modules';

const isProduction = process.env.NODE_ENV !== 'production';

const persistConfig = {
  key: 'root',
  storage,
};

const makeConfiguredStore = (reducer) =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    devTools: !isProduction,
    // enhancers: [composeWithDevTools(applyMiddleware(thunk))],
    // enhancers: [isProduction ? compose(applyMiddleware(thunk)) : composeWithDevTools(applyMiddleware(thunk))],
  });

const makeStore = () => {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return makeConfiguredStore(rootReducer);
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = makeConfiguredStore(persistedReducer);
  const persistor = persistStore(store);
  return { persistor, ...store };
};

const wrapper = createWrapper(makeStore, { debug: !isProduction });

export default wrapper;
