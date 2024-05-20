import { legacy_createStore as createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import allReducers from './reducers'

// 持久化状态
const persistConfig = {
  key: 'Mraing',
  storage
}

// 合并reducer
const persistedReducer = persistReducer(persistConfig, allReducers)

let store = createStore(persistedReducer)
let persistor = persistStore(store)
export { store, persistor }