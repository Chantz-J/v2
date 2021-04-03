import React, { useEffect } from "react"
import styled from 'styled-components'
import mediaQueries from '../styles/breakpoints'

import Layout from '../components/layout'
import Head from '../components/head'
import Hero from '../components/sections/heroSec'
import Projects from '../components/sections/projectSec'
import Blogs from '../components/sections/blogSec'
import About from '../components/sections/aboutSec'



const StyledMain = styled.main`
  margin-left: 160px;
  ${mediaQueries.phablet`
    margin-left: 0;
   `}
`

export default function Index (){
  return (
      <Layout>
        <Head title="Home"/>
        <StyledMain>
          <Hero />
          <About />
          <Projects />
          <Blogs />
        </StyledMain>
      </Layout>
  )
}


 