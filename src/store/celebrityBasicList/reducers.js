/*
 * @描述: 
 * @创建者: 张莹
 * @Date: 2020-05-05 13:18:53
 * @修改者: 张莹
 * @LastEditTime: 2020-05-05 13:18:54
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
import tabInit from "./state";
import {UPDATE_CELEBRITY} from "./constant"
export const reducer = (state=tabInit,action) =>{
    switch(action.type){
        case UPDATE_CELEBRITY:{
            return {
                ...state,
                result: [...state.result,...action.payload]
            }
        }
        default:{
            return state;
        }
    }
}