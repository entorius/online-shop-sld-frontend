import { SET_USER } from "./userActions";

const initialState = {
    user: undefined
}

export default function userState(state = initialState, action) {
    switch (action.type) {
        case SET_USER: 
            const { user } = action;
            return {...state, user}
        default:
            return state;
    }
}