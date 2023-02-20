import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { FLUSH } from 'redux-persist/es/constants';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
// import authReducer, { authSlice } from "./state/index"
import authSlice from "./state"

import App from './App'
import './index.css'
const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig,authSlice );
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={
        persistStore(store)
      }>

        <App />
      </PersistGate>

    </Provider>
  </React.StrictMode>,
)
