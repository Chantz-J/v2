import { combineReducers } from 'redux'

import { mobileReducer } from './Mobile/mobile.reducer'
import { messageReducer } from './Messages/messages.reducer'

export default combineReducers({
    mobile: mobileReducer,
    message: messageReducer,
})