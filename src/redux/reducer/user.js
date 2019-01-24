export default function (state = {}, action = { type: '' }) {
    switch (action.type) {
        case 'update_user' :
            return {
                ...state,
                user: action.user,
            }
        default:
            return state
    }
}