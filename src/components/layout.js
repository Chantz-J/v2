import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import Header from './header'
import Footer from './footer'

import theme from '../styles/theme'
import GlobalStyle from '../styles/globalStyles'
import "fontsource-open-sans/300.css"






export default function Layout(props) {

    return (
            <ThemeProvider theme={theme}>
                <GlobalLayout>
                    <GlobalStyle />
                    <Header />
                        {props.children}
                     <Footer />
                </GlobalLayout>
             </ThemeProvider>
    )
}



//STYLES
const GlobalLayout = styled.div`
    font-family: 'Open Sans', sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`