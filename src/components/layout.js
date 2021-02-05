import React from 'react'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

import GlobalStyle from '../styles/globalStyles'


// max-width: 1298px;
const GlobalLayout = styled.div`
    
margin-left: 160px; 
padding: 0px 10px;
    padding: 5rem;
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    flex-direction: column;
    min-height : 100vh;
`
const GrowContain = styled.div`
    flex-grow: 1;
`
const Sidenav = styled.div`
height: 100%; 
  width: 160px; 
  position: fixed; 
  z-index: 1; 
  top: 0; 
  left: 0;
  background-color: inherit; 
  overflow-x: hidden; 
  padding-top: 20px;
  border-right: 1px solid var(--dark);
`


const Layout = (props) => {
    return (
        <div id="root">
            <Sidenav>
            <div id ="logo"></div>
            <div id ="icon_box"></div>
            </Sidenav>
            {/************/}
            <GlobalLayout>
                <GlobalStyle />
                    <GrowContain>
                        <Header />
                        {props.children}
                    </GrowContain>
                    <Footer />
            </GlobalLayout>
        </div>
    )
}
export default Layout