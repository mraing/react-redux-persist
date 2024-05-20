/*
 * @Author: 绪锋
 * @Date: 2024-05-19 23:32:42
 * @LastEditors: 绪锋
 * @LastEditTime: 2024-05-20 00:42:27
 * @FilePath: /react-redux-persist/src/index.js
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'


import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
