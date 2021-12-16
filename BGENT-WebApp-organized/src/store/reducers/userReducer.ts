import { SET_USERDATA, SET_USERTOKEN, RESET_USER } from "../actions/actionTypes";

const initalState : IUserState = {
    name : '',
    emailId: '',
    userToken: ''
}
const userReducer = (state : IUserState = initalState, action: IAction) => {

    const {type, payload} = action;

    switch(type) {
        case SET_USERDATA:
            return {
                ...state,
                 name: payload.name,
                 emailId: payload.emailId
            }
        case SET_USERTOKEN:
            return {
                ...state,
                userToken: payload.userToken
            }
        case RESET_USER:
            return {
                ...state,
                initalState
            }
        default:
            return state
    }
}

export default userReducer