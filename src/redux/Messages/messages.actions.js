import { messageTypes } from './messages.types'

export const openMessage = () => ({
    type: messageTypes.MESSAGES_OPEN
})

export const closeMessage = () => ({
    type: messageTypes.MESSAGES_CLOSE
})