import { mobileTypes } from './mobile.types'

export const openMobile = () => ({
    type: mobileTypes.MOBILE_OPEN,
})

export const closeMobile = () => ({
    type: mobileTypes.MOBILE_CLOSE,
})