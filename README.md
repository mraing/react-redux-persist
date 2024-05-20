

### 安装

```shell
npm install react-redux redux redux-persist
```



### 配置

```js
// src/redux/store.js
import { legacy_createStore as createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
// 1. 引入相关文件
import storage from 'redux-persist/lib/storage'
// 引入store数据
import allReducers from './reducers'
// 2.配置数据持久化状态
const persistConfig = {
  key: 'Root',
  storage
}
// 3. 持久化根reducer和配置,并返回所有
const persistedReducer = persistReducer(persistConfig, allReducers)
// 4. 创建 持久化store对象
let store = createStore(persistedReducer)
// 5. 持久化store对象
let persistor = persistStore(store)
// 6.导出
export { store, persistor }
```



```js
// src/redux/reducrs/index.js
import { combineReducers } from 'redux'
import {counter} from './userMessage'

export default combineReducers({
  counter
})
```



```js
// src/redux/reducrs/userMessage.js
const initialState = 0;
const counter = (state = initialState, action) => {
    const { type, value } = action
    switch (type) {
        case 'INCREMENT':
            return state + value;
        case 'DECREMENT':
            return state - value;
            // 重置数据
        case 'RESET_COUNTER':
            return initialState;
        default:
            return state;
    }
};
export {counter}
```





```js
// src/index.js
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
```



### 使用

```js
import React from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux'
const App = ({ counter, setUserMessage }) => {
  const dispatch = useDispatch();
    
  const handleSetMsg = (value) => {
    setUserMessage(value)
  }
  const handleReset = async () => {
      await persistor.purge();
      await persistor.flush();
  }
  return (
    <div>
      <h2>store 数据可持久化</h2>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET_COUNTER' })}>重置数据</button>
	  <hr/>
      同样的效果
      <button onClick={() => handleSetMsg(4)}>Increment</button>
	<hr/>
      <button onClick={handleReset}>重置所有数据</button>
    </div>
  );
};

const mapStateToProps = state => {
  const { count } = state
  return { userMessage }
}

const mapDispatchToProps = {
  setUserMessage(value) {
    return { type: 'INCREMENT', value }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

```

