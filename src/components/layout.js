import React from 'react'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'
import Sidenav from './sidenav'

import GlobalStyle from '../styles/globalStyles'



const Root = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas: 
    "one two two two two two two two"
    "one two two two two two two two"
    "one two two two two two two two"
    "one two two two two two two two";
    grid-gap: 10px;

     .demo{
        grid-area: two;
        background: grey;
     }
     
     @media only screen and (max-width: 550px){
         grid-template-columns: 1fr;
         grid-template-rows: repeat(9, 1fr);
         grid-template-areas: 
         "two"
         "two"
         "two"
         "two"
         "two"
         "two"
         "two"
         "two"
         "one";
     }
`

const GlobalLayout = styled.div`
    grid-area: two;
    display: flex;
    flex-direction: column;
`

const Layout = (props) => {
    return (
        <Root>
            <Sidenav />
            <GlobalLayout>
            <GlobalStyle />
                 <Header />
                 {props.children}
                <Footer />
            </GlobalLayout>
        </Root>
    )
}
export default Layout