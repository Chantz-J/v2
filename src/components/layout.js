import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import Header from './header'
import Footer from './footer'

import theme from '../styles/theme'
import GlobalStyle from '../styles/globalStyles'
import "fontsource-open-sans/300.css"

import useDarkMode from 'use-dark-mode'
import DarkModeToggle from 'react-dark-mode-toggle'

import getTheme from '../styles/theme'


const Layout = (props) => {

    const darkMode = useDarkMode(false);
    const theme = getTheme(darkMode.value ? 'dark' : 'light')

    return (
            <ThemeProvider theme={theme}>
                <GlobalLayout>
                    <GlobalStyle />
                    <Header />
                    <DarkModeToggle
                onChange={darkMode.toggle}
                checked={darkMode.value}
                size={70}
            />
                    {props.children}
                     <Footer />
                </GlobalLayout>
            </ThemeProvider>
    )
}
export default Layout


//STYLES
const GlobalLayout = styled.div`
    color: ${props => props.theme.colors.textColor};
    background-color: ${props => props.theme.colors.background};
    font-family: 'Open Sans', sans-serif;
    padding: 1rem 15rem;
    display: flex;
    flex-direction: column;
    padding-bottom:60px;
    min-height: 100vh;
`