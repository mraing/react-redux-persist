/*
 * @Author: 绪锋
 * @Date: 2024-05-19 23:32:42
 * @LastEditors: 绪锋
 * @LastEditTime: 2024-05-20 01:33:49
 * @FilePath: /react-redux-persist/src/App.js
 * @Description: 
 */

import React from "react";
import { connect } from "react-redux";
import { SET_USER_MESSAGE } from './redux/constant'
import { useSelector, useDispatch } from 'react-redux'
import {persistor} from './redux/store'

const App = ({ userMessage,userName, setUserMessage, setUserName }) => {
  console.log(userName)
  const handleSetMsg = (msg) => {
    setUserMessage({
      msg: msg
    })
  }
  
  // import { useSelector, useDispatch } from 'react-redux'
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();
  
  const handleReset = async () => {
    await persistor.purge();
    await persistor.flush();
    // dispatch({ type: 'RESET_COUNTER' });
  };

  return (
    <div>
      <h2>React-persist Store 数据 持久化</h2>
      <h4>{userMessage?.msg}</h4>
      <button onClick={() => handleSetMsg('你能看到我么？？')}>点击我保存数据: 'A'</button>
      <button onClick={() => handleSetMsg('当然能看到你！！')}>点击我保存数据: 'B'</button>
      <hr />
      <h2>刷新重置数据</h2>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET_COUNTER' })}>重置数据</button>
      <hr />
      <h2>传参</h2>
      <div>我是{userName}</div>
      <button onClick={() => setUserName('Leegeing')}>改为Leegeing</button>
      <button onClick={() => setUserName('剑颖')}>改为剑颖</button>
      <hr />
      <button onClick={handleReset}>重置所有数据</button>
    </div>
  );
};

const mapStateToProps = state => {
  const { userMessage, userName } = state
  return { userMessage, userName }
}

const mapDispatchToProps = {
  //   type 这里需要与 case 的名称相对应，去执行不同的方法
  setUserMessage(value) {
    return { type: SET_USER_MESSAGE, value }
  },
  setUserName (value) {
    return { type: 'changeName', value }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
