import React from 'react'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

import GlobalStyle from '../styles/globalStyles'


const GlobalLayout = styled.div`
    margin: 0 auto;
    max-width: 1298px;
    padding: 1rem;
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    flex-direction: column;
    min-height : 100vh;
`
const GrowContain = styled.div`
    flex-grow: 1;
`

const Layout = (props) => {
    return (
        <GlobalLayout>
            <GlobalStyle />
            <GrowContain>
                <Header />
                {props.children}
            </GrowContain>
            <Footer />
        </GlobalLayout>
    )
}
export default Layout