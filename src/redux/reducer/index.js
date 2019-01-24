import { combineReducers } from "redux";

import todos from './todos'
import user from './user'


const app = combineReducers({
    todos,
    user
})


export default app