import { combineReducers } from 'redux'
import {userMessage, counter, userName} from './userMessage'

export default combineReducers({
  userMessage,
  counter,
  userName
})