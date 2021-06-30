import { mobileTypes } from './mobile.types'

const INITIAL_STATE = {
    isOpen: false
}

export const mobileReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case mobileTypes.MOBILE_OPEN:
            return {
                ...state,
                isOpen: !state.isOpen
            }
        case mobileTypes.MOBILE_CLOSE:
            return {
                ...state,
                ...INITIAL_STATE
            }
        default:
            return state
    }
}