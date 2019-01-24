// import { ADD_TODO } from "../constant";

export default function (state = {}, action = { type: '' }) {
    switch (action.type) {
        case 'ADD_TODO' :
            return {
                ...state,
                count: action.count,
            }
        default:
            return state
    }
}