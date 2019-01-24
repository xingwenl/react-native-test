
import { ADD_TODO } from "./constant";
/** 
 *  action 创建函数
 */


export function addTodo(count) {
    return {
        type: ADD_TODO,
        count
    }
}
