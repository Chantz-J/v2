import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'

import theme from '../styles/theme'
import GlobalStyle from '../styles/globalStyles'
import "fontsource-open-sans"
import "fontsource-ibm-plex-mono"


export default function Layout(props) {

    return (
            <ThemeProvider theme={theme}>
                <GlobalLayout>
                    <GlobalStyle />
                    <Sidebar />
                    <Header />
                        {props.children}
                     <Footer />
                </GlobalLayout>
             </ThemeProvider>
    )
}

const GlobalLayout = styled.div`
    background: ${props => props.theme.colors.dark};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`