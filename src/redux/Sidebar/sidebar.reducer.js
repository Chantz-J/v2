import { sidebarTypes } from './sidebar.types'

const INITIAL_STATE = {
    isExpanded: false
}

export const sidebarReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case sidebarTypes.SIDEBAR_OPEN:
            return {
                ...state,
                isExpanded: !state.isExpanded
            }
        case sidebarTypes.SIDEBAR_CLOSED:
            return {
                ...state,
                ...INITIAL_STATE
            }
        default:
            return state
    }
}