import React, { useEffect } from "react"
import styled from 'styled-components'

import Layout from '../components/layout'
import Head from '../components/head'
import Hero from '../components/sections/heroSec'
import Projects from '../components/sections/projectSec'
import Blogs from '../components/sections/blogSec'



const StyledMain = styled.main`
  margin-left: 160px;
`

export default function Index (){
  return (
      <Layout>
        <Head title="Home"/>
        <StyledMain>
          <Hero />
          <Projects />
          <Blogs />
        </StyledMain>
      </Layout>
  )
}


 