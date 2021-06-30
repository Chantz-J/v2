import { messageTypes } from './messages.types'

const INITIAL_STATE = {
    isVisible: false
}

export const messageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case messageTypes.MESSAGES_OPEN:
            return {
                ...state,
                isVisible: true
            }
        case messageTypes.MESSAGES_CLOSE:
            return {
                ...state,
                ...INITIAL_STATE
            }
        default:
            return state
    }
}