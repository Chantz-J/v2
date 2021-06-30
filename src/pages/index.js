import React from "react"
import styled from 'styled-components'
import mediaQueries from '../styles/breakpoints'

import Layout from '../components/layout'
import Head from '../components/head'
import Hero from '../components/sections/heroSec'
import Projects from '../components/sections/projectSec'
import ArticleComponent from '../components/Article/ArticleComponent'
import About from '../components/sections/aboutSec'
import ContactSec from '../components/sections/contactSec'



// const StyledMain = styled.main`
//    margin-left: 160px;
//    ${mediaQueries.phablet`
//     margin-left: 0;
//    `}
// `
const StyledMain = styled.main`
  background: black;

`



export default function Index (){
  return (
      <Layout>
        <Head title="Home"/>
        <StyledMain>
          <Hero />
          <ArticleComponent />
          {/* <About /> */}
          <Projects />
          <ContactSec />
        </StyledMain>
      </Layout>
  )
}


 