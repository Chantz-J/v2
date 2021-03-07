import React from "react"
import styled from 'styled-components'

import Layout from '../components/layout'
import Head from '../components/head'
import Hero from './sections/heroSec'
import Projects from './sections/projectSec'



const StyledMain = styled.main``

export default function Index (){
    
  return (
      <Layout>
        <Head title="Home"/>
        <StyledMain>
          <Hero />
          <Projects />
        </StyledMain>
      </Layout>
  )
}


 