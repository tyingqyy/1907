/*
 * @描述: 
 * @创建者: 张莹
 * @Date: 2020-04-27 16:32:26
 * @修改者: 张莹
 * @LastEditTime: 2020-04-27 20:43:29
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Order from "./pages/Order";

import BottomNav from "./components/BottomNav";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path={"/"} exact component={Home}/>
        <Route path={"/order"}  component={Order}/>
        <BottomNav />
      </Router>
    </div>
  );
}

export default App;
