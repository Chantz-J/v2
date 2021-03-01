// import React from 'react'
// import  { ThemeProvider } from 'styled-components'

const themeLight = {
    background: '#EAF2F8',
    color: '#282936',
}

const themeDark = {
    background: '#282936',
    color: '#EAF2F8',
}

const theme = mode => (mode === 'dark' ? themeDark : themeLight)

export default theme