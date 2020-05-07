/*
 * @描述: 
 * @创建者: 张莹
 * @Date: 2020-05-05 13:18:53
 * @修改者: 张莹
 * @LastEditTime: 2020-05-05 13:18:54
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import tabInit from "./state";
import {UPDATE_TAB} from "./constant"
export const reducer = (state=tabInit,action) =>{
    switch(action.type){
        case UPDATE_TAB:{
            return {
                ...state,
                result: [...state.result,... action.payload]
            }
        }
        default:{
            return state;
        }
    }
}