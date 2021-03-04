import React from "react"
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import Hero from './sections/heroSec'



const StyledMain = styled.main``

export default function Index (){
    
  return (
      <Layout>
        <Head title="Home"/>
        <StyledMain>
          <Hero />
        </StyledMain>
      </Layout>
  )
}


 