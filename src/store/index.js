/*
 * @描述: 
 * @创建者: 张莹
 * @Date: 2020-04-27 21:01:24
 * @修改者: 张莹
 * @LastEditTime: 2020-05-05 13:20:42
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import {
    createStore,//创建仓库
    applyMiddleware,//异步请求需要转换
    compose,//浏览器插件
    combineReducers//将子 reducer 合并成一个大的 reducer
} from "redux";
import thunk from "redux-thunk";//dispatch 只能接受一个(对象)参数,这个中间件就是为了解决这个问题的

import {reducer as tabReducer} from "./tab";
import {reducer as celebrityBasicListReducer} from "./celebrityBasicList";

const rootReducer = combineReducers({
    tabList:tabReducer,
    celebrityList:celebrityBasicListReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//浏览器插件

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));//创建仓库

export default store;