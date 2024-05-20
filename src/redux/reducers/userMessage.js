/*
 * @Author: 绪锋
 * @Date: 2024-05-19 23:50:00
 * @LastEditors: 绪锋
 * @LastEditTime: 2024-05-20 01:28:21
 * @FilePath: /react-redux-persist/src/redux/reducers/userMessage.js
 * @Description: 
 */
// 用户路由权限列表
import { SET_USER_MESSAGE } from '../constant'

const inintState = {}

const userMessage = (prevState = inintState, action) => {
  const { type, value } = action
  console.log('userMessage', action)
  switch (type) {
    case SET_USER_MESSAGE:
      let newUserMessge = { ...prevState }
      newUserMessge = value
      return newUserMessge
    default:
      return prevState
  }
}

const initialState = 0;
const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET_COUNTER':
      return initialState;
    default:
      return state;
  }
};

const initUserName = '剑颖'
const userName = (state = initUserName, action) => {
  const { type, value } = action
  console.log('action', action)
  switch (type) {
    case 'changeName':
      state = value
      return state
    default:
      return state;
  }
}

export {userMessage, counter, userName}