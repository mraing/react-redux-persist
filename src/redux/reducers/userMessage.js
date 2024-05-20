/*
 * @Author: 绪锋
 * @Date: 2024-05-19 23:50:00
 * @LastEditors: 绪锋
 * @LastEditTime: 2024-05-20 09:52:00
 * @FilePath: \react-persiti 数据持久化2\src\redux\reducers\userMessage.js
 * @Description: 
 */
// 用户路由权限列表

const inintState = {}

const userMessage = (prevState = inintState, action) => {
  const { type, value } = action
  switch (type) {
    case 'setUserMessage':
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
  switch (type) {
    case 'changeName':
      state = value
      return state
    default:
      return state;
  }
}

export {userMessage, counter, userName}