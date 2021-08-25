import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import mediaQueries from '.././styles/breakpoints'

import Navbar from './Navbar'
import Footer from './footer'
// import Sidebar from './sidebar'
import SideNav from './SideNav'
import Mobile from './Mobile'

import GlobalFonts from '.././fonts/fonts'

import theme from '../styles/theme'
import GlobalStyle from '../styles/globalStyles'
import "fontsource-open-sans"
import "fontsource-ibm-plex-mono"

import store from '../redux/store'

export default function Layout(props) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalLayout>
                    <GlobalFonts />
                    <GlobalStyle />
                    <SideNav />
                    <Mobile />
                    <Navbar />
                        {props.children}
                    <Footer />
                </GlobalLayout>
            </ThemeProvider>
        </Provider>
    )
}

const GlobalLayout = styled.div`
    overflow-x: hidden;
    background: ${props => props.theme.colors.blue[1]};
    color: ${props => props.theme.colors.grey};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin-left: 160px;
   ${mediaQueries.tablet`
    margin-left: 0;
   `}

`